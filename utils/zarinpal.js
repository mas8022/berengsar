const ZARINPAL_BASE_URL = "https://sandbox.zarinpal.com/pg/rest/WebGate";

export const useZarinpal = () => {
  const createPayment = async ({ amount, description, mobile }) => {
    if (!amount || !description) {
      throw new Error("Amount, description, and callback URL are required.");
    }

    try {
      const response = await fetch(`${ZARINPAL_BASE_URL}/PaymentRequest.json`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          MerchantID: process.env.ZARINPAL_MERCHANTID,
          Amount: amount,
          Description: description,
          CallbackURL: "/api/checkout/verify", // callback url address
          Mobile: mobile || undefined,
        }),
      });

      const result = await response.json();

      if (result.Status === 100) {
        return {
          success: true,
          authority: result.Authority,
          paymentUrl: `https://sandbox.zarinpal.com/pg/StartPay/${result.Authority}`,
        };
      } else {
        return {
          success: false,
          error: result.Message || "Failed to create payment.",
        };
      }
    } catch (error) {
      return {
        success: false,
        error: error.message || "Server error occurred.",
      };
    }
  };

  const verifyPayment = async ({ authority, amount }) => {
    if (!authority || !amount) {
      throw new Error(
        "Authority and amount are required for payment verification."
      );
    }

    try {
      const response = await fetch(
        `${ZARINPAL_BASE_URL}/PaymentVerification.json`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            MerchantID: process.env.ZARINPAL_MERCHANTID,
            Authority: authority,
            Amount: amount,
          }),
        }
      );

      const result = await response.json();

      if (result.Status === 100) {
        return { success: true, refId: result.RefID };
      } else {
        return {
          success: false,
          refId: false,
          error: result.Message || "Failed to verify payment.",
        };
      }
    } catch (error) {
      return {
        success: false,
        refId: false,
        error: error.message || "Server error occurred.",
      };
    }
  };

  return { createPayment, verifyPayment };
};
