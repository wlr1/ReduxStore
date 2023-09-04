import { createAsyncThunk } from "@reduxjs/toolkit";
import { Pizza, SearchPizzaParams } from "./types";
import axios from "axios";

export const fetchPizzas = createAsyncThunk<Pizza[], SearchPizzaParams>(
  "pizza/fetchPizzasStatus",
  async (params) => {
    const { order, sortBy, category, search, pageCount } = params;
    const { data } = await axios.get<Pizza[]>(
      `https://64552fa8f803f345763cc845.mockapi.io/items?page=${pageCount}&limit=4&${category}${search}&sortBy=${sortBy}&order=${order}`
    );
    return data;
  }
);
