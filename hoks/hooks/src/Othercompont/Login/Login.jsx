import React, { useState } from "react";
import "./Login.css";
// import { auth } from "../firebase";
// import {
// 	signInWithEmailAndPassword,
// 	createUserWithEmailAndPassword,
// } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
// import { Button, Form, FormControl } from "react-bootstrap";

function Login() {
	const navigate = useNavigate();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	// const signIn = (e) => {
	// 	e.preventDefault();

	// 	signInWithEmailAndPassword(auth, email, password)
	// 		.then((userCredential) => {
	// 			if (userCredential) {
	// 				navigate("/");
	// 			}
	// 		})
	// 		.catch((error) => alert(error.message));
	// };
	// const register = (e) => {
	// 	e.preventDefault();

	// 	createUserWithEmailAndPassword(auth, email, password)
	// 		.then((userCredential) => {
	// 			// console.log(auth)
	// 			if (userCredential) navigate("/");
	// 		})
	// 		.catch((error) => {
	// 			const errorMessage = error.message;
	// 			alert(errorMessage);
	// 		});
	// };

	return (
		<div className="login ">
			<Link to="/">
				<img
					className="login__logo"
					src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
				/>
			</Link>
			<div className="login__container">
				<h1>Sign in</h1>

				<Form>
					<Form.Group controlId="exampleForm.ControlInput1">
						<Form.Label className="fw-email-pass">Email</Form.Label>
						<FormControl
							type="text"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
					</Form.Group>
					{/* <h5>E-mail</h5> */}
					{/* <input
						type="text"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/> */}
					<Form.Group controlId="exampleForm.ControlTextarea1">
						<Form.Label className="fw-email-pass">Password</Form.Label>
						<FormControl
							type="password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
					</Form.Group>
					{/* <Button
						type="submit"
						onClick={signIn}
						className="login__signInButton "
					>
						Sign In
					</Button> */}
					{/* <h5>Password</h5> */}
					{/* <input
						type="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/> */}
					<button
						type="submit"
						onClick={signIn}
						className="login__signInButton mt-3"
					>
						Sign In
					</button>
				</Form>

				<p>
					By signing-in you agree to the AMAZON FAKE CLONE{" "}
					<a href=" ">Conditions of Use </a> & <a href="">Sale</a> . Please see
					our <a href="">Privacy Notice</a>, our Cookies Notice and our
					Interest-Based Ads Notice.
				</p>

				<div class="line-container">
					<hr class="line" />
					<span class="line-text">New to Amazon?</span>
					<hr class="line" />
				</div>

				<button onClick={register} className="login__registerButton">
					Create your Amazon Account
				</button>
			</div>
		</div>
	);
}

export default Login;
