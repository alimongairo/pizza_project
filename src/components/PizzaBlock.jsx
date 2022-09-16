import React from 'react';

function PizzaBlock(props) {
  const doughType = ['тонкое', 'классическое'];
  const [activeType, setActiveType] = React.useState(0);
  const [activeSize, setActiveSize] = React.useState(0);
  const [activePrice, setActivePrice] = React.useState(0);
  const [amount, setAmount] = React.useState(0);

  const onClickAddButton = () => {
    setAmount(amount + 1);
  };

  const onClickDeleteButton = () => {
    setAmount(amount - 1);
  };

  return (
    <div className="pizza-block">
      <img className="pizza-block__image" src={props.img} alt="Pizza" />
      <h4 className="pizza-block__title">{props.title}</h4>
      <div className="pizza-block__selector">
        <ul>
          {props.types.map((type, idx) => (
            <li
              key={idx}
              onClick={() => setActiveType(idx)}
              className={activeType === idx ? 'active' : ''}>
              {doughType[type]}
            </li>
          ))}
        </ul>
        <ul>
          {props.sizes.map((size, idx) => (
            <li
              key={idx}
              onClick={() => {
                setActiveSize(idx);
                setActivePrice(idx);
              }}
              className={activeSize === idx ? 'active' : ''}>
              {size} см
            </li>
          ))}
        </ul>
      </div>
      <div>
        <div className="pizza-block__price">{props.prices[activePrice]} ₽</div>
        <button className="pizza-block__button" onClick={() => onClickDeleteButton()}>
          -
        </button>
        <span>В корзине</span>
        <span className="pizza-block__amount">{amount}</span>
        <button className="pizza-block__button" onClick={() => onClickAddButton()}>
          +
        </button>
      </div>
    </div>
  );
}

export default PizzaBlock;
