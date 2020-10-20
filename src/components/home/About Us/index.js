// About US PAGE COMPONENT

import React from 'react';

class AboutUs extends React.Component {
    render() {
        return (
            <div className="about">
                <div className="container">
                    <div className="col-md-6 wow fadeInDown" data-wow-duration="1000ms" data-wow-delay="300ms">
                        <h2>About Us</h2>
                        <img src="images/i.jpg" className="img-responsive" alt="About us"/>
                    </div>
                    <div className="col-md-6 wow fadeInDown" data-wow-duration="1000ms" data-wow-delay="600ms">
                        <p style={{marginTop:120}}>In most of the countries specially pakistan when a certain group of people face an
                            incident like natural disaster, road accident or deprived of basic facilities of
                            food ,shelter, home, education etc.Sometimes the family of the victims loses thier earning source
                            which leads to thier bad financial condition.
                            </p>
                        <p>We as a responsible citizen of this country feels that their should be a
                           platform where any one across the country want to help the family of victims
                           can donate money to us . We will distribute the money amoung those victims famalies.
                           By this initiative the difficulties of the people we reduce and result into
                           the development of the society.
                            </p>
                        <p>
                            We ensure you that we will give your donated amount to the victims famalies.
                            </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default AboutUs;