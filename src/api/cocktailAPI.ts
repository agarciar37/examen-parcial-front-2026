import axios from "axios";
import { CocktailsResponse } from "@/type/cocktail";

/*
https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita
https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11007
https://www.thecocktaildb.com/api/json/v1/1/random.php
*/ 

const api = axios.create({
  baseURL: "https://www.thecocktaildb.com/api/json/v1/1",
});

export const getCocktails = async (): Promise<CocktailsResponse> => {
  const res = await api.get("/search.php?s=margarita");
  return res.data;
};

export const getCocktailById = async (
  id: string
): Promise<CocktailsResponse> => {
  const res = await api.get(`/lookup.php?i=${id}`);
  return res.data;
};

export const getRandomCocktail = async (): Promise<CocktailsResponse> => {
  const res = await api.get("/random.php");
  return res.data;
};