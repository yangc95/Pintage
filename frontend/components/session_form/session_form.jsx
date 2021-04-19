import React from 'react';
import {
	Link, 
	Route,
	Redirect} from 'react-router-dom';

class SessionForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			username: "",
			email: "",
			password: "",
		};
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleDemoSubmit = this.handleDemoSubmit.bind(this);
	}

	update(field) {
		return e => this.setState({
			[field]: e.currentTarget.value
		});
	}

	handleSubmit(e) {
		e.preventDefault();
		const user = Object.assign({}, this.state);
		// this.props.history.replaceState('/')
		this.props.action(user)
			.then(this.props.closeModal)
			// .then(this.props.history.push('/home'))
	}

	handleDemoSubmit(e) {
		e.preventDefault();
		const user = Object.assign({}, {username: "DemoUser", email: "test@gmail.com", password: "hunter10"});
		this.props.action(user)
			.then(this.props.closeModal)
			// .then(this.props.history.push('/home'))
	}

	renderErrors() {
		const { errors } = this.props;
		return(
		<ul>
			{errors.map((error, i) => (
			<li key={`error-${i}`}>
				{error}
			</li>
			))}
		</ul>
		);
	}

	render() {
		const { formType, otherForm, closeModal } = this.props; 
		const { username, email, password } = this.state;

		let emailLabel = "";
		if (formType === 'signup') {
			emailLabel = <label>
							<input 
								type="email"
								value={email}
								onChange={this.update('email')}
								placeholder="Email"
							/>
						</label>
		}

		return (
			<div className="signin-modal">
				{/* { (formType === 'login' || formType === 'signup' && !currentUser) ? <Redirect path='/' /> : "" } */}
				<form className="signin-form" onSubmit={this.handleSubmit}>
					<div className="signin-close" onClick={closeModal}>
						&times;
					</div>

					<img src={window.logoURL}/>
					<h1>Welcome to Pintage</h1>
					<p className="sign-in-sub-header">Find new ideas to try</p>


					<div className="input">
						{emailLabel}

						<label>
							<input 
								type="text"
								value={username}
								onChange={this.update('username')}
								placeholder="Username"
							/>
						</label>
						<div className="errors">{this.renderErrors()}</div>

						<label>
							<input 
								type="password"
								value={password}
								onChange={this.update('password')}
								placeholder="Password"
							/>
						</label>
					</div>

					<button className="submit" type="submit">Continue</button>

					<div className="or-other-form">
						<p>OR</p>
						<p>{ otherForm }</p>
					</div>
					<button className="demo-login" onClick={this.handleDemoSubmit}>Demo Login</button>
				</form>
			</div>
		);
	}
}

export default SessionForm;