import React, { useState } from "react";
import pizzaImage from "../images/pizza.jpg";

function PizzaCard({ title, text, price }) {
    const [counter, setCounter] = useState(0);

    const increment = () => setCounter(prevCounter => prevCounter + 1);

    const decrement = () => {
        if (counter > 0) {
            setCounter(prevCounter => prevCounter - 1);
        }
    };

    const submitButtonOnClick = (event) => {
        const pizzaDiameter = document.getElementById("pizza_diam").value;

        if (pizzaDiameter === "Диаметр") {
            alert("Выберите диаметр пиццы!");
            event.preventDefault();
        } else if (counter === 0) {
            alert("Определитесь с количеством товара!");
            event.preventDefault();
        } else {
            alert(`Количество заказанного товара: ${counter}`);
        }
    };

    return (
        <div className="card__wrapper">
            <img src={pizzaImage} alt="Пицца" className="card__image" />
            <h2 className="card__title">{title}</h2>
            <p className="card__text">{text}</p>
            <select id="pizza_diam" className="card__pizza__diameter" defaultValue="Диаметр">
                <option disabled>Диаметр</option>
                <option>30 см</option>
                <option>60 см</option>
            </select>
            <p className="card__pizza__price">от {price} руб.</p>
            <form className="card__input__wrapper" onSubmit={submitButtonOnClick}>
                <input type="button" value="-" className="card__input__decrement" onClick={decrement} />
                <input id="quantity" type="text" value={counter} className="card__input__quantity" readOnly />
                <input type="button" value="+" className="card__input__increment" onClick={increment} />
                <button type="submit" className="card__order__button"></button>
            </form>
        </div>
    );
}

export default PizzaCard;
