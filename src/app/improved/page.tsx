import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { Header } from "@/components/Header";

export default function Home() {
  const codeString = `type nameMap = {
  [key: string]: string;
};

type Person = {
  id: number;
  name: string;
};

const exampleArray = ["jaś", "małgosia"];

const namesMap: nameMap = {
  jaś: "Jan",
  małgosia: "Małgorzata",
};

const mapToRequiredFormat = (array: string[], mapping: nameMap): Person[] => {
  return array.map((name, id) => ({
    id: id,
    name: mapping[name],
  }));
};

console.log(mapToRequiredFormat(exampleArray, namesMap));`;

  return (
    <>
      <Header text="Lvl2: TypeScript" />
      <p>
        In the slightly improved version I&apos;ve added type declarations for{" "}
        <code>Person</code> and <code>nameMap</code>. This ensures that the
        input and output data are of the required type, for extra type safety.
      </p>
      <div className="flex gap-4 items-center flex-col sm:flex-row">
        <SyntaxHighlighter language="javascript" style={a11yDark}>
          {codeString}
        </SyntaxHighlighter>
      </div>
    </>
  );
}
