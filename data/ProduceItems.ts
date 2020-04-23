import { ProduceCategory, ProduceItem, Season } from "../types";

const Apples: ProduceItem = {
  id: 1,
  name: "Apples",
  imageAssetPath: require("../assets/images/apple.jpg"),
  category: ProduceCategory.fruit,
  shortDescription: "Green or red, they're generally round and tasty.",
  accentColor: "#de8c66",
  seasons: [Season.winter, Season.spring, Season.summer, Season.autumn],
  vitaminAPercentage: 2,
  vitaminCPercentage: 8,
  servingSize: "One large apple",
  caloriesPerServing: 130,
  trivia: [],
};

const Artichokes: ProduceItem = {
  id: 2,
  name: "Artichokes",
  imageAssetPath: require("../assets/images/artichoke.jpg"),
  category: ProduceCategory.flower,
  shortDescription: "The armadillo of vegetables.",
  accentColor: "#8ea26d",
  seasons: [Season.spring, Season.autumn],
  vitaminAPercentage: 0,
  vitaminCPercentage: 25,
  servingSize: "1 medium artichoke",
  caloriesPerServing: 60,
  trivia: [],
};

const Aspargus: ProduceItem = {
  id: 3,
  name: "Asparagus",
  imageAssetPath: require("../assets/images/asparagus.jpg"),
  category: ProduceCategory.fern,
  shortDescription: "It's been used a food and medicine for millenia.",
  accentColor: "#8cb437",
  seasons: [Season.spring],
  vitaminAPercentage: 10,
  vitaminCPercentage: 15,
  servingSize: "5 spears",
  caloriesPerServing: 20,
  trivia: [],
};

const Avocado: ProduceItem = {
  id: 4,
  name: "Avocado",
  imageAssetPath: require("../assets/images/avocado.jpg"),
  category: ProduceCategory.stealthFruit,
  shortDescription: "One of the oiliest, richest fruits money can buy.",
  accentColor: "#b0ba59",
  seasons: [Season.winter, Season.spring, Season.summer],
  vitaminAPercentage: 0,
  vitaminCPercentage: 4,
  servingSize: "1/5 medium avocado",
  caloriesPerServing: 50,
  trivia: [],
};

const BlackBerries: ProduceItem = {
  id: 5,
  name: "Blackberries",
  imageAssetPath: require("../assets/images/blackberry.jpg"),
  category: ProduceCategory.berry,
  shortDescription: "Find them on backroads and fences in the Northwest.",
  accentColor: "#09d5adb",
  seasons: [Season.summer],
  vitaminAPercentage: 6,
  vitaminCPercentage: 4,
  servingSize: "1 cup",
  caloriesPerServing: 62,
  trivia: [],
};

const Cantaloupe: ProduceItem = {
  id: 6,
  name: "Cantaloupe",
  imageAssetPath: require("../assets/images/cantaloupe.jpg"),
  category: ProduceCategory.melon,
  shortDescription: "A fruit so tasty there's a utensil just for it.",
  accentColor: "#0f6bd56",
  seasons: [Season.summer],
  vitaminAPercentage: 120,
  vitaminCPercentage: 80,
  servingSize: "1/4 medium cantaloupe",
  caloriesPerServing: 50,
  trivia: [],
};

export default [
  Apples,
  Artichokes,
  Aspargus,
  Avocado,
  BlackBerries,
  Cantaloupe,
];
