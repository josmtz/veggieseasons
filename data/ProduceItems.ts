import { ProduceCategory, ProduceItem, Season } from "../types";

const Apples: ProduceItem = {
  id: 1,
  name: "Apples",
  imageAssetPath: require("../assets/images/apple.jpg"),
  category: ProduceCategory.fruit,
  shortDescription: "Green or red, they're generally round and tasty.",
  accentColor: "#40de8c66",
  seasons: [Season.winter, Season.spring, Season.summer, Season.autumn],
  vitaminAPercentage: 2,
  vitaminCPercentage: 8,
  servingSize: "One large apple",
  caloriesPerServing: 130,
  trivia: [],
};

export default [Apples];
