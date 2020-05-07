import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <footer className="bg-dark text-light text-center text-md-left">
                    <div className="container">
                        <div className="row pt-4">
                            <div className="col-sm-6 col-md-3 pb-4">
                                <h4 className="mb-4">
                                    Services
                                </h4>
                                <ul className="list-unstyled">
                                    <li className="text-light">
                                        Packing and Moving
                                    </li>
                                    <li className="text-light">
                                        Truck Booking
                                    </li>
                                    <li className="text-light">
                                        Website design
                                    </li>
                                    <li className="text-light">
                                        Bulk Truck Booking
                                    </li>
                                </ul>
                            </div>
                            <div className="col-sm-6 col-md-3 pb-4">
                                <h4 className="mb-4">
                                    Our Qualities
                                </h4>
                                <ul className="list-unstyled">
                                    <li className="text-light">
                                        On Time Truck Availability
                                    </li>
                                    <li className="text-light">
                                        Safe Packing and Moving
                                    </li>
                                    <li className="text-light">
                                        Best Pricing
                                    </li>
                                    <li className="text-light">
                                        Customer Satisfaction
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-6 pb-4">
                                <h4 className="mb-4">
                                    BookMyTruck.com
                                </h4>
                                <p>
                                    Our customers mean a lot to us.
                                </p>
                            </div>
                        </div>
                        <div className="col d-flex justify-content-center mb-4">
                            <a target="_blank" href="https://github.com/mhtsoni" className="d-block px-3"><img src="https://cdnjs.cloudflare.com/ajax/libs/webicons/2.0.0/webicons/webicon-github-m.png" alt="Github" /></a><a target="_blank" href="https://www.quora.com/profile/Mohit-770" className="d-block px-3"><img src="https://cdnjs.cloudflare.com/ajax/libs/webicons/2.0.0/webicons/webicon-quora-m.png" alt="Quora" /></a><a target="_blank" href="https://www.linkedin.com/in/mhtsoni/" className="d-block px-3"><img src="https://cdnjs.cloudflare.com/ajax/libs/webicons/2.0.0/webicons/webicon-linkedin-m.png" alt="Linkedin" /></a>
                        </div>
                        <p className="text-center text-secondary border-top border-secondary py-4">
                            Mohit Soni © 2020
                        </p>
                    </div>
                </footer>
            </div>
        )
    }
}

