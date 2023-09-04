import React from 'react';

type CategoriesProps = {
  onClickCategory: (idx: number) => void;
  value: number;
};

const categories = ['All', 'Meat', 'Vegetarian', 'Grill', 'Spicy', 'Closed'];

const Categories: React.FC<CategoriesProps> = React.memo(
  ({ value, onClickCategory }) => {
    const categoriesEl = categories.map((category, i) => {
      return (
        <li
          key={i}
          onClick={() => onClickCategory(i)}
          className={value === i ? 'active' : ''}
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
  }
);

export default Categories;
