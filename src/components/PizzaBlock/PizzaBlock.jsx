import React from 'react';
import './PizzaBlock.css'
import { useDispatch } from 'react-redux';
import { addItem } from '../../redux/slices/cartSlice';

const doughType = ['тонкое', 'классическое'];
const sizeType = ['26', '30', '40'];

function PizzaBlock(props) {
  const [activeType, setActiveType] = React.useState(0);
  const [activeSize, setActiveSize] = React.useState(0);
  const [activePrice, setActivePrice] = React.useState(0);
  const dispatch = useDispatch();

  const onClickAddButton = () => {
    const item = {
      id: props.id,
      title: props.title, 
      price: props.prices[activeSize],
      image: `../${props.img}`,
      type: doughType[activeType],
      size: sizeType[activeSize]
    };
    dispatch(addItem(item));
  };

  // const onClickDeleteButton = () => {
  //   setAmount(amount - 1);
  // };

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
        {/* <button className="pizza-block__button" onClick={() => onClickDeleteButton()}>
          &ndash;
        </button> */}
        {/* <span>В корзине</span>
        <span className="pizza-block__amount">{addedAmount}</span> */}
        <button className="pizza-block__button" onClick={() => onClickAddButton()}>
          &#10010; Добавить
        </button>
      </div>
    </div>
  );
}

export default PizzaBlock;
