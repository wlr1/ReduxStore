import React from "react";

const Categories = (props) => {
  const categories = [
    "Все",
    "Мясные",
    "Вегетарианские",
    "Гриль",
    "Острые",
    "Закрытые",
  ];

  const categoriesEl = categories.map((category, i) => {
    return (
      <li
        key={i}
        onClick={() => props.onClickCategory(i)}
        className={props.value === i ? "active" : ""}
      >
        {category}
      </li>
    );
  });

  return (
    <div className="categories">
      <ul>{categoriesEl}</ul>
    </div>
  );
};

export default Categories;
