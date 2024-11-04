"use server";

import { Categories, Foods } from "./page.types";

export async function getCategories(): Promise<Categories> {
  const res = await fetch(
    "https://gist.githubusercontent.com/wilson-wego/f7381fcead7a47a7df257a97a033456a/raw/33cd31ce75ba72a809d48944463b53b74b9ccae8/categories.json"
  );
  return await res.json();
}

export async function getFoods(): Promise<Foods> {
  const res = await fetch(
    "https://gist.githubusercontent.com/wilson-wego/8311b463cd331099e34a1f251dad4cbf/raw/f1b04f9afe0fcc0c9270cb486b927641b7d27436/food.json"
  );
  return await res.json();
}
