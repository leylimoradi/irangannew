import React from 'react';
import { Component } from 'react';


export default class ModalParallexTitle extends Component { 
    componentDidMount() {
        window.addEventListener("scroll", this.resizeHeaderOnScroll);

    }

    resizeHeaderOnScroll() {
        const distanceY = window.pageYOffset || document.documentElement.scrollTop,
            shrinkOn = 200,
            headerEl = document.getElementById("titlescroll");

        if (distanceY > shrinkOn) {
            headerEl.classList.add("show");

        } else {
            headerEl.classList.remove("show");

        }
    }


    render() {
        return (
            <div id="titlescroll">خودرو</div>
        )   
        }
}