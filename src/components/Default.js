import React, { Component } from 'react';
import styled from 'styled-components';

export default class Default extends Component {
    render() {
        //console.log(this.props);
        return (
            <div className="container">
                <div className="row">
                    <div className="col-10 mx-auto text-center text-title pt-5 mt-20">
                        <i className="fa fa-frown-o fa-5x" style={{color:'orange'}}></i>
                        <h1 className="display-3">404 error</h1>
                        <h1>page not found</h1>
                        <h3>the requested url <span className="text-danger">'{this.props.location.pathname} '</span> was not found</h3>
                    </div>
                </div>
            </div>          
        );
    }
}
