import React, { Component } from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {ProductConsumer} from '../context';
import {ButtonContainer} from './Button';

export default class Modal extends Component {
    render() {
        return (
            <ProductConsumer>
                {
                    (value)=>{
                        const {openModal,closeModal,modalOpen}=value;
                        const {img,title,price}=value.modalProduct;
                        //console.log(modalOpen);
                        if(!modalOpen)
                        {return null;}
                        else
                        {
                            //console.log("opening model");
                            return (<ModalContainer>
                                <div className="container">
                                    <div className="row">
                                        <div id="modal" className="col-8 col-md-6 col-lg-4 mx-auto 
                                                                   text-center text-capitalize p-5">
                                            <h5>item added to the cart</h5> 
                                            <img src={img} className="img-fluid" alt="product"/>
                                            <h5>{title}</h5>
                                            <h5 className="text-muted">price : ${price}</h5>
                                            <Link to="/">
                                                <ButtonContainer onClick={()=>closeModal()}>
                                                    back to store
                                                </ButtonContainer>
                                            </Link>
                                            <Link to="/cart">
                                                <ButtonContainer cart onClick={()=>closeModal()}>
                                                    go to cart
                                                </ButtonContainer>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </ModalContainer>); 
                        }
                    }
                }
            </ProductConsumer>
        );
    }
}
const ModalContainer=styled.div`
    position:fixed;
    top:0;
    bottom:0;
    left:0;
    right:0;
    background:rgba(0,0,0,0.3);
    display:flex;
    align-items:center;
    justify-content:center;
    #modal{
        background:var(--mainWhite);
    }
`;