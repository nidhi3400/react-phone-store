import React from 'react'
import { isFulfilled } from 'q';

export default function CartColumns() {
    return (
        <div className="container-fluid text-center d-none d-lg-block">
            <div className="row">
                <div className="col-10 col-lg-2 mx-auto">
                    <strong><p className="text-uppercase">products</p></strong>
                </div>
                <div className="col-10 col-lg-2 mx-auto">
                    <strong><p className="text-uppercase">name of product</p></strong>
                </div>
                <div className="col-10 col-lg-2 mx-auto">
                    <strong><p className="text-uppercase">price</p></strong>
                </div>
                <div className="col-10 col-lg-2 mx-auto">
                    <strong><p className="text-uppercase">quantity</p></strong>
                </div>
                <div className="col-10 col-lg-2 mx-auto">
                    <strong><p className="text-uppercase">remove</p></strong>
                </div>
                <div className="col-10 col-lg-2 mx-auto">
                    <strong><p className="text-uppercase">total</p></strong>
                </div>
            </div>
        </div>
    );
}
