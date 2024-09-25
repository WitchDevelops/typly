import { Header } from "@/components/Header";
import { NameMapper } from "@/components/Form";

export default function Home() {
  return (
    <>
      <Header text="Lvl3: Form" />
      <p>
        In this version I have expanded the name map to allow for more
        dimunitive name versions
      </p>
      <div className="flex gap-4 items-center flex-col sm:flex-row">
        <NameMapper />
      </div>
    </>
  );
}
