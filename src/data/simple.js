const exampleArray = ["jaś", "małgosia"];

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
console.log(mapToRequiredFormat(exampleArray, namesMap));
