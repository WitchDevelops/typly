import { Header } from "@/components/Header";
import { NameMapper } from "@/components/Form";

export default function Home() {
  return (
    <>
      <Header text="Lvl3: Form" />
      <p>
        In this version I have expanded the name map to allow for more versions
        of the names "Jan" and "Małgorzata". You can type them in to see the
        result. Available name versions: jaś, jas, jan, janek, jasiu, jasiek,
        jasieczek, johny, małgosia, malgosia, małgorzata, malgorzata,
        małgorzatka, malgorzatka, gośka, goska, gocha, goszka.
      </p>
      <p>
        The main drawback of this approach in general is the need of defining
        all the name variants (and either mapping them, or using a regex), but I
        do not see any other viable option, unless there is some API for that.
      </p>
      <div className="flex gap-4 items-center flex-col sm:flex-row max-w-full w-full">
        <NameMapper />
      </div>
    </>
  );
}
