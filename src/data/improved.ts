type nameMap = {
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

console.log(mapToRequiredFormat(exampleArray, namesMap));
