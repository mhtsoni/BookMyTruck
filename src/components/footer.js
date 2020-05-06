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
                                        Web design
                                    </li>
                                    <li className="text-light">
                                        Web design
                                    </li>
                                    <li className="text-light">
                                        Web design
                                    </li>
                                    <li className="text-light">
                                        Web design
                                    </li>
                                </ul>
                            </div>
                            <div className="col-sm-6 col-md-3 pb-4">
                                <h4 className="mb-4">
                                    About
                                </h4>
                                <ul className="list-unstyled">
                                    <li className="text-light">
                                        Company
                                    </li>
                                    <li className="text-light">
                                        Company
                                    </li>
                                    <li className="text-light">
                                        Company
                                    </li>
                                    <li className="text-light">
                                        Company
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-6 pb-4">
                                <h4 className="mb-4">
                                    Company Name
                                </h4>
                                <p>
                                    Praesent sed lobortis mi. Suspendisse vel placerat ligula. Vivamus ac sem lacus. Ut vehicula rhoncus elementum. Etiam quis tristique lectus. Aliquam in arcu eget velit pulvinar dictum vel in justo.
                                </p>
                            </div>
                        </div>
                        <div className="col d-flex justify-content-center mb-4">
                            <a href="#" className="d-block px-3"><img src="https://cdnjs.cloudflare.com/ajax/libs/webicons/2.0.0/webicons/webicon-facebook-m.png" alt="Facebook" /></a><a href="#" className="d-block px-3"><img src="https://cdnjs.cloudflare.com/ajax/libs/webicons/2.0.0/webicons/webicon-twitter-m.png" alt="Twitter" /></a><a href="#" className="d-block px-3"><img src="https://cdnjs.cloudflare.com/ajax/libs/webicons/2.0.0/webicons/webicon-instagram-m.png" alt="Instagram" /></a><a href="#" className="d-block px-3"><img src="https://cdnjs.cloudflare.com/ajax/libs/webicons/2.0.0/webicons/webicon-linkedin-m.png" alt="Linkedin" /></a>
                        </div>
                        <p className="text-center text-secondary border-top border-secondary py-4">
                            iLeaf Solutions © 2020
                        </p>
                    </div>
                </footer>
            </div>
        )
    }
}

