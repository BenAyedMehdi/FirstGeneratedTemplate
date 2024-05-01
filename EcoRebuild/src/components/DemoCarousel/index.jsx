import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


export default class DemoCarousel extends Component {
    render() {
        return (
            <Carousel autoPlay autoFocus>
                <div>
                    <img src="ecorebuild_images/logo.png" alt=""/>
                    <p className="legend">Enhancing Menstrual Hygiene Management in Conflict-Affected Areas</p>
                </div>
                <div>
                    <img src="ecorebuild_images/logo.png" alt=""/>
                    <p className="legend">Mushroom Cultivation in Gaza for Soil Remediation</p>
                </div>
                <div>
                <img src="ecorebuild_images/infinitegen.png" alt=""/>
                    <p className="legend">Eco-Energy Conversion from Basic Materials</p>
                </div>
                <div>
                    <img src="ecorebuild_images/logo.png" alt=""/>
                    <p className="legend">Enhancing Refugee Shelters – Housing for Gaza</p>
                </div>
            </Carousel>
        );
    }
};