import React from 'react';
import './loginfields.css'

class LField extends React.Component
{

	renderButton(buttonName)
	{
		return(
			<div className="buttoncontainer">
				<button className="button">
					{buttonName}
				</button>
			</div>
		);
	}

	render()
	{
		const fieldVal = this.props.value;

		if (fieldVal !== "LOGIN" && fieldVal !== "CREATE ACCOUNT" && fieldVal !== "password")
		{
			const placeholderTxt = "Enter " + fieldVal;
			return(
				<div className="loginfield">
					<input className="textfield" type="text" placeholder={placeholderTxt}/>
				</div>
			);
		}
		else if (fieldVal === "password")
		{
			const placeholderTxt = "Enter " + fieldVal;
			return(
				<div className="loginfield">
					<input className="textfield" type="password" placeholder={placeholderTxt}/>
				</div>
			);

		}

		return(
			<div className="buttonfield">
				{this.renderButton(fieldVal)}
			</div>

		);


	}

}

export default LField;
