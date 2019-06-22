import React from 'react';

export default function CartItem({item,value}) {
    const {id,title,price,count,total,img} = item;
    const {increment,decrement,removeItem} = value;
    //console.log(value);
    return (
        <div className="my-2 row text-capitalize text-center">
            <div className="col-10 col-lg-2 mx-auto">
                <img src={img} className="img-fluid" style={{width:'5rem',height:'5rem'}}  alt="product"/>
            </div>
            <div className="col-10 col-lg-2 mx-auto">
                <span className="d-lg-none">Product : </span>{title}
            </div>
            <div className="col-10 col-lg-2 mx-auto">
                <span className="d-lg-none">Price : </span>$ {price}
            </div>
            <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
                <div className="d-flex justify-content-center">
                    <div>
                        <span className="btn btn-black mx-1" onClick={()=>decrement(id)}>-</span>
                        <span className="btn btn-black mx-1">{count}</span>
                        <span className="btn btn-black mx-1" onClick={()=>increment(id)}>+</span>
                    </div>
                </div>
            </div>
            <div className="col-10 col-lg-2 mx-auto">
                <div className="cart-icon" onClick={()=>removeItem(id)}>
                    <i className="fa fa-trash"></i>
                </div>
            </div>
            <div className="col-10 col-lg-2 mx-auto">
                <strong>item total : $ {total}</strong>
            </div>
        </div>
    );
}
