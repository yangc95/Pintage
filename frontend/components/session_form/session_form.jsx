import React from 'react';

class SessionForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			email: "",
			username: "",
			password: "",
		};
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	update(field) {
		return e => this.setState({
			[field]: e.currentTarget.value
		});
	}

	handleSubmit(e) {
		e.preventDefault();
		const user = Object.assign({}, this.state);
		this.props.action(user);
	}

	// renderErrors() {
	// 	return (
	// 		<ul></ul>
	// 	);
	// }

	render() {
		const { formType } = this.props; 
		const { username, email, password } = this.state;

		return (
			<div className="signin-modal is-open">
				<form className="signin-modal-form" onSubmit={this.handleSubmit}>
					
					<span className="signin-modal-close js-modal-close">&times;</span>

					<img src={window.logoURL}/>
					<p>{formType} below</p>
					<h1>Welcome to Pintage</h1>
					<p>Find new ideas to try</p>

					<div className="input">
						<label>
							<input 
								type="text"
								value={username}
								onChange={this.update('username')}
							/>
						</label>
						<label>
							<input 
								type="email"
								value={email}
								onChange={this.update('email')}
							/>
						</label>
						<label>
							<input 
								type="password"
								value={password}
								onChange={this.update('password')}
							/>
						</label>
						<button className="submit">{formType}</button>
					</div>
				</form>
				<div className="signin-modal-screen js-modal-close"></div>
			</div>
		);
	}
}

export default SessionForm;