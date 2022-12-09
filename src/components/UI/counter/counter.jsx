import React, { useState, useEffect, useContext } from 'react';
import { context } from '../../..';
import classes from './counter.module.css';

const Counter = ({ price, id, ref, func, func2, saveOrNot, count }) => {
    const [Сount, setCount] = useState(1);
    const [Price, setPrice] = useState(price);
    const { store } = useContext(context);

    useEffect(() => {
        if (saveOrNot == true) {
            localStorage.setItem(id, price)
        }
    }, [])

    function increment() {
        setCount(Сount + 1)
        setPrice(price * (Сount + 1))
        if (saveOrNot == true) {
            localStorage.setItem(id, price * (Сount + 1));
        }

    }

    function decrement() {
        if (Сount < 2) {
            setCount(1);
            if (saveOrNot == true) {
                localStorage.setItem(id, price);
            }


        } else {
            setCount(Сount - 1)
            setPrice(Price - price)
            if (saveOrNot == true) {
                localStorage.setItem(id, Price - price);
            }


        }

    }

    function delElem() {
        let index
        for (let i = 0; i < store.basket.length; i++) {
            if (store.basket[i].id === id) {
                index = i
            }
        }

        store.basket.splice(index, 1)
    }
    return (
        <div className={classes.basket_counter}>
            <div className={classes.counter_container}>
                <button className={classes.counter_plus} onClick={() => {
                    decrement()
                    func()
                }}><img className={classes.plus} src='/assets/img/minus.png' /></button>
                <div className={classes.counter}><a className={classes.count}>{Сount}</a></div>
                <button className={classes.counter_minus} onClick={() => {
                    increment()
                    func2()
                }}><img className={classes.minus} src='/assets/img/plus.png' /></button>
            </div>
            <a className={classes.counter_price} >{Price}₽</a>
        </div>
    )
}

export default Counter;
