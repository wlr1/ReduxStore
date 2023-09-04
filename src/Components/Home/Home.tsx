import Categories from "../Categories/Categories";
import Sort, { list } from "../Sort/Sort";
import ProductSkeleton from "../ProductSkeleton/ProductSkeleton";
import Product from "../Product/Product";
import Pagination from "../Pagination/Pagination";

import React from "react";
import qs from "qs";

import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  setCategoryId,
  setPageCount,
  setFilters,
  selectFilter,
} from "../../redux/Slices/filterSlice";
import { fetchPizzas, selectPizzaData } from "../../redux/Slices/pizzasSlice";

const Home = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isSearch = React.useRef(false);
  const isMounted = React.useRef(false);

  const { categoryId, sort, pageCount, searchValue } =
    useSelector(selectFilter);
  const { items, status } = useSelector(selectPizzaData);

  const sortType = sort.sortProperty;

  const onClickCategory = (id) => {
    dispatch(setCategoryId(id));
  };

  const onChangePage = (number) => {
    dispatch(setPageCount(number));
  };

  const getPizzas = async () => {
    const order = sortType.includes("-") ? "asc" : "desc";
    const sortBy = sortType.replace("-", "");
    const category = categoryId > 0 ? `category=${categoryId}` : "";
    const search = searchValue ? `search=${searchValue}` : "";

    dispatch(
      fetchPizzas({
        order,
        sortBy,
        category,
        search,
        pageCount,
      })
    );
  };

  //if params changed and there was first render
  React.useEffect(() => {
    if (isMounted.current) {
      const queryString = qs.stringify({
        sortProperty: sort.sortProperty,
        categoryId,
        pageCount,
      });

      navigate(`?${queryString}`);
    }
    isMounted.current = true;
  }, [categoryId, sortType, searchValue, pageCount]);

  //if there was first render, then we check fir url-params and save in redux
  React.useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1));

      const sort = list.find((obj) => obj.sortProperty === params.sortProperty);

      dispatch(
        setFilters({
          ...params,
          sort,
        })
      );
      isSearch.current = true;
    }
    getPizzas();
  }, []);

  //if there was first render, we ask for pizzas
  React.useEffect(() => {
    window.scrollTo(0, 0);

    if (!isSearch.current) {
      getPizzas();
    }

    isSearch.current = false;
  }, [categoryId, sortType, searchValue, pageCount]);

  const pizzas = items.map((obj) => <Product key={obj.id} {...obj} />);

  const skeleton = [...new Array(6)].map((_, i) => <ProductSkeleton key={i} />);

  return (
    <div className="container">
      <div className="content__top">
        <Categories value={categoryId} onClickCategory={onClickCategory} />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      {status === "error" ? (
        <div className="content__error-info">
          <h2>Something goes wrong! 😕</h2>
          <p>Can't access to pizzas database. Try again later!</p>
        </div>
      ) : (
        <div className="content__items">
          {status === "loading" ? skeleton : pizzas}
        </div>
      )}

      <Pagination value={pageCount} onChangePage={onChangePage} />
    </div>
  );
};

export default Home;
