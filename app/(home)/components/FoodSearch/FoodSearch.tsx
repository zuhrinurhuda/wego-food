import SearchIcon from "@/components/icons/SearchIcon";
import Input from "@/components/ui/Input/Input";

import styles from "./FoodSearch.module.css";

export default function FoodSearch() {
  return (
    <Input
      type="text"
      placeholder="Enter restaurant name..."
      startIcon={<SearchIcon />}
      className={styles.search}
    />
  );
}
