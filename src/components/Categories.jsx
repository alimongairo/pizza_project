import React from 'react';

function Categories() {
  const categories = ['Все', 'Мясные', 'Вегетарианские'];

  const [activeCat, setActiveCat] = React.useState(0);

  const onClickCat = (idx) => {
    setActiveCat(idx);
  };

  return (
    <div className="categories">
      <ul>
        {categories.map((title, idx) => (
          <li
            key={idx}
            onClick={() => onClickCat(idx)}
            className={activeCat === idx ? 'active' : ''}>
            {title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
