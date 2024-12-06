import Landing from "@/components/templates/landing";

export default function Home() {
  return (
    <div
      className="w-full image overflow-y-scroll"
      style={{ backgroundImage: "url('/images/bg.png')" }}
    >
      <Landing />
    </div>
  );
}
