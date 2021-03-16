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
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					This will be the Nav Bar
					<br />
					{this.props.navLink}
					<div>
						<label>Username:
							<input 
								type="text"
								value={this.state.username}
								onChange={this.update('username')}
							/>
						</label>
						<label>Email:
							<input 
								type="email"
								value={this.state.email}
								onChange={this.update('email')}
							/>
						</label>
						<label>Password:
							<input 
								type="password"
								value={this.state.password}
								onChange={this.update('password')}
							/>
						</label>
						<button>{this.props.formType}</button>
					</div>
				</form>
			</div>
		);
	}
}

export default SessionForm;