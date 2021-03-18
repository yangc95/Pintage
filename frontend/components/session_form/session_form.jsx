import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			username: "",
			email: "",
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
		// this.props.history.replaceState('/')
		this.props.action(user);
		this.props.history.push('/home');
	}

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

	render() {
		const { formType, navLink } = this.props; 
		const { username, email, password } = this.state;


		return (
			<div className="signin-modal is-open">
				<form className="signin-modal-form" onSubmit={this.handleSubmit}>
					<Link className="signin-modal-close js-modal-close" to="/">
						&times;
					</Link>

					<img src={window.logoURL}/>
					<p>{formType} below</p>
					<h1>Welcome to Pintage</h1>
					<p>Find new ideas to try</p>
					<span>{this.renderErrors()}</span>

					<div className="input">
						<label>
							<input 
								type="email"
								value={email}
								onChange={this.update('email')}
								placeholder="Email"
							/>
						</label>
						<label>
							<input 
								type="text"
								value={username}
								onChange={this.update('username')}
								placeholder="Username"
							/>
						</label>
						<label>
							<input 
								type="password"
								value={password}
								onChange={this.update('password')}
								placeholder="Password"
							/>
						</label>
							<button className="submit">Continue</button>
						<p>OR</p>
						{navLink}
					</div>
				</form>
				<div className="signin-modal-screen js-modal-close"></div>
			</div>
		);
	}
}

export default SessionForm;