export interface Category {
  id: string;
  name: string;
}

export type Categories = Category[];

export interface Food {
  id: string;
  index: number;
  rating: number;
  promotion: string;
  isNew: boolean;
  categoryId: string;
  minCookTime: number;
  maxCookTime: number;
  restaurant: string;
  name: string;
  imageUrl: string;
}

export interface Foods {
  foods: Food[];
}
