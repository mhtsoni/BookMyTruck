import React from 'react'
import "../App.css"
function SignUp() {
    return (
        <div>
            <section className="signup" style={{backgroundColor:"white"}}>
                <div class="container">
                <div class="row justify-content-center">
                    <div class="col-12 col-md-8 col-lg-8 col-xl-6">
                    <div class="row">
                        <div class="col text-center">
                        <h1>Register</h1>
                        <p class="text-h3">You are only 1 step behind your first truck booking. </p>
                        </div>
                    </div>
                    <div class="row align-items-center">
                        <div class="col mt-4">
                        <input type="text" class="form-control" placeholder="Company Name"/>
                        </div>
                    </div>
                    <div class="row align-items-center mt-4">
                        <div class="col">
                        <input type="email" class="form-control" placeholder="Email"/>
                        </div>
                    </div>
                    <div class="row align-items-center mt-4">
                        <div class="col">
                        <input type="password" class="form-control" placeholder="Password"/>
                        </div>
                        <div class="col">
                        <input type="password" class="form-control" placeholder="Confirm Password"/>
                        </div>
                    </div>
                    <div class="row justify-content-start mt-4">
                        <div class="col">
                        <div class="form-check">
                            <label class="form-check-label">
                            <input type="checkbox" class="form-check-input"/>
                            I Read and Accept <a href="#">Terms and Conditions</a>
                            </label>
                        </div>
                        <br/>
                        <button class="btn btn-primary btn-block">Submit</button>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </section>
        </div>
    )
}

export default SignUp
