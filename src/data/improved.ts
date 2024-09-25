// type NameMap = {
//   [key: string]: string;
// };

// type Person = {
//   id: number;
//   name: string;
// };

const exampleArray = ["jaś", "małgosia"];

const namesMap: NameMap = {
  jaś: "Jan",
  małgosia: "Małgorzata",
};

const mapToRequiredFormat = (array: string[], mapping: NameMap): Person[] => {
  return array.map((name, id) => ({
    id: id,
    name: mapping[name],
  }));
};

console.log(mapToRequiredFormat(exampleArray, namesMap));
