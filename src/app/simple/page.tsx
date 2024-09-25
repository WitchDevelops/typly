import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { Header } from "@/components/Header";

export default function Home() {
  const codeString = `const exampleArray = ["jaś", "małgosia"];

const namesMap = {
  jaś: "Jan",
  małgosia: "Małgorzata",
};

const mapToRequiredFormat = (array, mapping) => {
  return array.map((name, id) => ({
    id: id,
    name: mapping[name],
  }));
};

console.log(mapToRequiredFormat(exampleArray, namesMap));`;

  const consoleLog = `[ { id: 0, name: 'Jan' }, { id: 1, name: 'Małgorzata' } ]`;

  return (
    <>
      <Header text="Lvl1: JavaScript" />
      <p>
        This is the simplest solution I could think of. I didn&apos;t use{" "}
        <code>toUpperCase()</code> method, because apart from capitalizing the
        names, we also need to map the diminutive versions to proper ones.
      </p>
      <div className="max-w-full w-full">
        <SyntaxHighlighter language="javascript" style={a11yDark}>
          {codeString}
        </SyntaxHighlighter>
        <p>Result:</p>
        <SyntaxHighlighter language="javascript" style={a11yDark}>
          {consoleLog}
        </SyntaxHighlighter>
      </div>
    </>
  );
}
