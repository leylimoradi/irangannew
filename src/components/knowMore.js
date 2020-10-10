import React from 'react';
import { Component } from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import Parralex from '../components/parralex'


    export default class TopBar extends Component {
    constructor(props) {
        super(props);
        this.state = { isHide: false };
        this.hideBar = this.hideBar.bind(this)
    }
    hideBar() {
        let { isHide } = this.state
        window.scrollY > this.prev ?
            !isHide && this.setState({ isHide: true })
            :
            isHide && this.setState({ isHide: false })

        this.prev = window.scrollY;
    }
    componentDidMount() {
        window.addEventListener('scroll', this.hideBar);
    }
    componentWillUnmount() {


        window.removeEventListener('scroll', this.hideBar);
    }
    render() {

        let classHide = this.state.isHide ? "hide" : ""

        return <div className={"topbar " + classHide}>
            <div className="container">
                <p>بیشتر بدانید</p>
               
                <IoIosArrowBack size={35} />
            </div>
            <Parralex />
        </div>;
    }
}
