import React from 'react'
import "../App.css"
function Login() {
    return (
        <div>
            <div className="global-container login">
	<div className="card login-form">
	<div className="card-body">
		<h3 className="card-title text-center">Log in to BookMyTruck.com</h3>
		<div className="card-text">
			<form>
				<div className="form-group">
					<label for="exampleInputEmail1">Email address</label>
					<input type="email" className="form-control form-control-sm" id="exampleInputEmail1" aria-describedby="emailHelp"/>
				</div>
				<div className="form-group">
					<label for="exampleInputPassword1">Password</label>
					<a href="#" style={{float:"right"}}>Forgot password?</a>
					<input type="password" className="form-control form-control-sm" id="exampleInputPassword1"/>
				</div>
				<button type="submit" className="btn btn-primary btn-block">Sign in</button>
			</form>
		</div>
	</div>
</div>
</div>
        </div>
    )
}

export default Login;
