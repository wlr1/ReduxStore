export type SearchPizzaParams = {
  sortBy: string;
  order: string;
  category: string;
  search: string;
  pageCount: string;
};

export type Pizza = {
  id: string;
  price: number;
  type: number[];
  sizes: number[];
  imageUrl: string;
  title: string;
};

export enum Status {
  LOADING = "loading",
  COMPLETED = "success",
  ERROR = "error",
}

export interface PizzaSliceState {
  items: Pizza[];
  status: Status;
}
