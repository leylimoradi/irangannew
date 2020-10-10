import React from 'react';
import { Fragment } from 'react';
import { Component } from 'react';
import text1 from '../data/text.txt';
import text2 from '../data/text2.txt';
import text3 from '../data/text3.txt';
import text4 from '../data/text4.txt';
import text5 from '../data/text5.txt';
import text6 from '../data/text6.txt';
import text7 from '../data/text7.txt';
import text8 from '../data/text8.txt';
import text9 from '../data/text9.txt';
import text10 from '../data/text10.txt';
import text11 from '../data/text11.txt';
import text12 from '../data/text12.txt';
import text13 from '../data/text13.txt';
import text14 from '../data/text13.txt'; 
import text15 from '../data/text15.txt'; 
import img1 from '../images/content/imgContent1.jpg'
import img2 from '../images/content/imgContent22.jpg'
import img3 from '../images/content/imgContent2.jpg'
import img4 from '../images/content/imgContent4.jpg'
import img5 from '../images/content/imgContent23.jpg'
import img6 from '../images/content/imgContent6.jpg'
import img7 from '../images/content/imgContent7.jpg'
import img8 from '../images/content/imgContent8.jpg'
import img9 from '../images/content/imgContent10.jpg'
import img10 from '../images/content/imgContent13.jpg'
import img11 from '../images/content/imgContent15.jpg'
import img12 from '../images/content/imgContent19.jpg'


export default class Content extends Component {
    render() {
        return (
            <Fragment>
                <div className="parallexContainer">
                    <div className="contentParallex">
                <p>
                    {text1}
                </p>
                <img src={img1} alt="content picture" />
                <p>
                    {text2}
                </p>
                <img src={img2} alt="content picture" />
                <h4>مروری بر تاریخچه خودرو</h4>
                <p>{text3}</p>
                <img src={img3} alt="content picture" />
                <p>{text4}</p>
                <img src={img4} alt="content picture" />
                <p>{text5}</p>
              
                </div>
                </div>
                <div className="fixedImg"></div>
                <div className="parallexContainer">
                    <div className="contentParallex">
                        <h4>مهم‌ترین بخش‌های خودرو</h4>
                        <p>{text6}</p>
                        <img src={img5} alt="content picture" />
                        <h4>انواع خودرو</h4>
                        <p>{text7}</p>
                        <img src={img6} alt="content picture" />
                        <p>{text8}</p>
                        <img src={img7} alt="content picture" />
                        <p>{text9}</p>
                        <img src={img8} alt="content picture" />
                        <p>{text10}</p>
                        <img src={img9} alt="content picture" />
                        <p>{text11}</p>
                        <img src={img10} alt="content picture" />
                        <p>{text12}</p>
                        <img src={img11} alt="content picture" />
                        <p>{text13}</p>


                    </div>
                </div>
                <div className="fixedImg xs"></div>
                <div className="parallexContainer">
                    <div className="contentParallex">
                        <h4>برندهای برتر خودرو در دنیا</h4>
                        <p>{text14}</p>
                        <img src={img12} alt="content picture" />
                        <p>{text15}</p>

                    </div>
                </div>

            </Fragment>
        )
    }
}