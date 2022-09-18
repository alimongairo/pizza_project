import React from 'react';
import './Categories.css'

function Categories({id, onClickCat}) {
  const categories = ['Все', 'Мясные', 'Вегетарианские'];

  return (
    <div className="categories">
      <ul>
        {categories.map((title, idx) => (
          <li
            key={idx}
            onClick={() => onClickCat(idx)}
            className={id === idx ? 'active' : ''}>
            {title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
