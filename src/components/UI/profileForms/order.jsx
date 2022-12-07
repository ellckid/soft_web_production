import React from 'react';
import classes from "./css/order.module.css"

const Order = ({ userid, orderlist, totalprice }) => {

    return (
        <div className={classes.order_container}>
            <div className={classes.order}>
                <h3 className={classes.order_title}>{userid}</h3>
                <div className={classes.order_preview_container}>
                    {
                        orderlist.map((item, id) => (
                            <div key={id}>
                                <img className={classes.order_preview} src={item.url} />
                            </div>
                        ))
                    }
                </div>
                <h3 className={classes.order_price}>{totalprice}Р</h3>
            </div>
        </div>

    );
};

export default Order;
