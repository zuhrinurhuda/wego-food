import FoodSearch from "./components/FoodSearch";
import FoodFilter from "./components/FoodFilter";
import FoodCatalog from "./components/FoodCatalog";
import { getCategories, getFoods } from "./actions";
import { Categories, Foods } from "./page.types";
import styles from "./page.module.css";

export default async function Page() {
  const categories: Categories = await getCategories();
  const { foods }: Foods = await getFoods();

  // let currentLoadIndex = 0;
  // const limitPerLoad = 9;

  // const handleLoadMore = () => {
  //   const foodToDisplay = foods.slice(
  //     currentLoadIndex,
  //     currentLoadIndex + limitPerLoad
  //   );
  //   currentLoadIndex += limitPerLoad;
  //   return foodToDisplay;
  // };

  return (
    <main className={styles.container}>
      <FoodSearch />
      <FoodFilter categories={categories} />
      <FoodCatalog cards={foods} />
    </main>
  );
}
