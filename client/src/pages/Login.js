import React from "react";
import axios from "axios";

class Login extends React.Component {
	state = {
		username:"",
		password:""
	};

	handleInputChange = event => {
		const {name, type, value } = event.target;
		this.setState({
			[name]:value,
<<<<<<< HEAD
			[type]: value
=======
			[type]:value
>>>>>>> b12cd8332c8d237f04181392c4ea973b1c745578
		})
	};
	handleFormSubmit = event => {
		event.preventDefault();
		if(this.state.username && this.state.password){
			const data = {username: this.state.username, password: this.state.password}
			axios.post("/api/auth/login", data).then(res => {
				console.log(res);
			})
		}
	};

	render(){
		return (
			<div>
			Login
				<form>
					<label>Username</label><input name="username" value={this.state.username} onChange={this.handleInputChange} /><br />
					<label>Password</label><input type="password" value={this.state.password} onChange={this.handleInputChange} /><br />
					<button onClick={this.handleFormSubmit}>Submit</button>
				</form>
			</div>
		)
	}
};

export default Login;