import * as React from "react";
import { ImageSourcePropType } from 'react-native';

export enum ProduceCategory {
  allium = "Allium",
  berry = "Berry",
  citrus = "Citrus",
  cruciferous = "Cruciferous",
  fern = "Technically a fern",
  flower = "Flower",
  fruit = "Fruit",
  fungus = "Fungus",
  gourd = "Gourd",
  leafy = "Leafy",
  legume = "Legume",
  melon = "Melon",
  root = "Root vegetable",
  stealthFruit = "Stealth fruit",
  stoneFruit = "Stone fruit",
  tropical = "Tropical",
  tuber = "Tuber",
  vegetable = "Vegetable",
}

export enum Season {
  winter = "Winter",
  spring = "Spring",
  summer = "Summer",
  autumn = "Autumn",
}

export type ProduceItem = {
  id: number;
  name: string;
  imageAssetPath: ImageSourcePropType;
  category: ProduceCategory;
  shortDescription: string;
  accentColor: string;
  seasons: Season[];
  vitaminAPercentage: number;
  vitaminCPercentage: number;
  servingSize: string;
  caloriesPerServing: number;
  isFavorite?: boolean;
  trivia?: TriviaQuestion[];
};

export type TriviaQuestion = {
  question: string;
  answers: string[];
  correctAnswerIndex: number;
};
