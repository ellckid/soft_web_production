import React from 'react';

import Order from "../../UI/profileForms/order"
import classes from "./css/order.module.css";
const OrdersForm = ({ data, ref }) => {
    return (
        <div className={classes.swiper}>
            <div className={classes.swiper_piper}>{
                data.map((item, id) => (
                    <div key={id}>
                        <Order
                            userid={item.userid}
                            totalprice={item.totalprice}
                            orderlist={item.orderlist}
                        />
                    </div>
                ))
            }
            </div>
        </div >
    );
}

export default OrdersForm;

