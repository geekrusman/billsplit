import React from 'react';
import './loginbox.css';
import LField from './loginfields.js';

class LoginBox extends React.Component
{

	constructor(props)
	{
		super(props);
		this.state = {
			loginfields:["username", "password", "LOGIN", "Phone Number", "CREATE ACCOUNT"],
			login:0,
		}
	}


	signupTitleOnClick()
	{
		this.setState({
			loginfields:["username", "password", "LOGIN", "Phone Number", "CREATE ACCOUNT"],
			login:1
		})
	}

	loginTitleOnClick()
	{
		this.setState({
			loginfields:["username", "password", "LOGIN", "Phone Number", "CREATE ACCOUNT"],
			login:0
		})
	}

	renderLoginTitleContainer()
	{
		return(
			<div className="logintitlecontainer" >
				<label className="titlelabel" onClick = {()=>this.loginTitleOnClick()}>
				LOGIN
				</label>
			</div>
		);
	}

	renderSignupTitleContainer()
	{
		return(
			<div className="signuptitlecontainer" >
				<label className="titlelabel" onClick = {()=>this.signupTitleOnClick()}>
				SIGNUP
				</label>
			</div>
		);
	}

	renderExtraSpaceTitleContainer()
	{
		return(
			<div className="extraspacetitlecontainer">
			</div>
		);
	}


	renderTitleContainer()
	{
		return(
			<div className="rendertitlecontainer">
				{this.renderLoginTitleContainer()}
				{this.renderSignupTitleContainer()}
				{this.renderExtraSpaceTitleContainer()}
			</div>
		);
	}


	renderField(i)
	{
		return(
				<LField value={this.state.loginfields[i]}/>
		);
	}

	renderFieldsContainer()
	{
		if (this.state.login === 0)
		{
			return(
				<div className="renderfieldscontainer">
					{this.renderField(0)}
					{this.renderField(1)}
					{this.renderField(2)}
				</div>
			);
		}
		else
		{
			return(
				<div className="renderfieldscontainer">
					{this.renderField(0)}
					{this.renderField(1)}
					{this.renderField(4)}
				</div>
			);
		}
	}

	render()
	{
		if (this.state.login === 0)
		{
			return(
				<div className="logincontainer">
					{this.renderTitleContainer()}
					{this.renderFieldsContainer()}
					</div>
			);
		}
		else
		{
			return(
				<div className="logincontainer">
					{this.renderTitleContainer()}
					{this.renderFieldsContainer()}
				</div>
			);
		}

	}
}

export default LoginBox;
