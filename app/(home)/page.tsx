import FoodSearch from "./components/FoodSearch";
import FoodFilter from "./components/FoodFilter";
import FoodCatalog from "./components/FoodCatalog";
import { getCategories, getFoods } from "./actions";
import { Categories, Foods } from "./page.types";
import styles from "./page.module.css";
import { FoodProvider } from "./context/FoodContext";

export default async function Page() {
  const categories: Categories = await getCategories();
  const { foods }: Foods = await getFoods();

  return (
    <main className={styles.container}>
      <FoodProvider initialState={{ foods, categories }}>
        <FoodSearch />
        <FoodFilter />
        <FoodCatalog />
      </FoodProvider>
    </main>
  );
}
