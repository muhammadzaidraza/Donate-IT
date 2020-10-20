// HOME PAGE COMPONENT

import React from 'react';
//Router, Route, Switch,
import AboutUs from './About Us';

class Home extends React.Component {
    render() {
        return (
            <div>
                <section id="main-slider" className="no-margin">
                    <div className="carousel slide">
                        <div className="carousel-inner">
                            <div className="item active" style={{ backgroundImage: 'url(images/b.jpg)' }}>
                                <div className="container">
                                    <div className="row slide-margin">
                                        <div className="col-sm-6">
                                            <div className="carousel-content" style={{ marginTop: 50 }}>
                                                <h2 className="animation animated-item-1">Help to save <span>someone's life</span></h2>
                                                <p className="animation animated-item-2" style={{ fontWeight: 'bold', color: 'black' }} >
                                                    A donation is a gift for charity, humanitarian
                                                    aid, or to benefit a cause. A donation may take various forms, including money, alms, services,
                                                    or goods such as clothing, toys, food, or vehicles. A donation may satisfy medical needs
                                                such as blood or organs for transplant.</p>
                                                <button className="btn btn-primary btn-lg " ><a href="#aboutSection" style={{ color: "white" }} >About Us</a></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*/.item*/}
                        </div>
                        {/*/.carousel-inner*/}
                    </div>
                    {/*/.carousel*/}
                </section>
                <div id="aboutSection">
                    <AboutUs />
                </div>
            </div>
        );
    }
}

export default Home;