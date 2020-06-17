import React, { Component } from 'react'
import './Slide.css'
import office from './officeS.jpg'
import paper from './paper.jpg'
import tech from './tech.jpg'
import safety from './safetyE.jpg'
import clean from './cleaningI.jpg'
import Carousel from 'react-bootstrap/Carousel'
class Slide extends Component {


    render() {
        const Lheading ={color:'#FDEA33',fontSize:'30px',fontWeight:'bold',textShadow:'3px 3px 3px black'}
        const lable ={color:'#FDEA33',fontSize:'20px',fontWeight:'bold',textShadow:'3px 3px 3px black'}
        const OPP ={opacity:'80%'}
        return (
            <div className="SLIDE">
                <section className="home">
                    <div className="slide">
                         <div className="container" >
                            <Carousel >
                                <Carousel.Item>
                                    <img style={OPP}
                                        className="d-block w-100"
                                        src={office}
                                        alt="First slide"
                                    />
                                    <Carousel.Caption id="lable" >
                                        <div id="LABLE">
                                        <h3 style={Lheading}>Office Stationery</h3>
                                        <p style={lable}>Get anything you want From pen to pencil, we Sell everything.</p>
                                        </div>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img style={OPP}
                                        className="d-block w-100"
                                        src={paper}
                                        alt="second slide"
                                    />

                                    <Carousel.Caption id="lable">
                                        <h3 style={Lheading}>Sheets</h3>
                                        <p style={lable}>The sheets come with latest Colorlok technology.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img style={OPP}
                                        className="d-block w-100"
                                        src={tech}
                                        alt="Third slide"
                                    />

                                    <Carousel.Caption id="lable">
                                        <h3 style={Lheading}>Technology</h3>
                                        <p style={lable}>Simple Solutions for Complex Connections In better way.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img style={OPP}
                                        className="d-block w-100"
                                        src={clean}
                                        alt="fourth slide"
                                    />
                                    <Carousel.Caption id="lable">
                                        <h3 style={Lheading}>Cleaning</h3>
                                        <p style={lable}>Lose the mop and well clean the slop with Latest</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img style={OPP}
                                        className="d-block w-100"
                                        src={safety}
                                        alt="Fifth slide"
                                    />
                                    <Carousel.Caption id="lable">
                                        <h3 style={Lheading}>Safety Equipment</h3>
                                        <p style={lable}>Protective products you need for a safe workplace. Order your safety supplies Now</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            </Carousel>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Slide;
