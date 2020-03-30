import React from 'react';
import './dashleftpane.css'

class DashLeftPane extends React.Component
{


	renderBillIcon()
	{
		return(
			<div className="icons">
				<svg className="iconsvg" xmlns="http://www.w3.org/2000/svg"
				height="24" viewBox="0 0 24 24" width="24">
				<path  d="M18 17H6v-2h12v2zm0-4H6v-2h12v2zm0-4H6V7h12v2zM3
				 22l1.5-1.5L6 22l1.5-1.5L9 22l1.5-1.5L12 22l1.5-1.5L15
				 22l1.5-1.5L18 22l1.5-1.5L21 22V2l-1.5 1.5L18 2l-1.5
				 1.5L15 2l-1.5 1.5L12 2l-1.5 1.5L9 2 7.5 3.5 6 2 4.5
				 3.5 3 2v20z"/>
				 <path d="M0 0h24v24H0z" fill="none"/>
				 </svg>
			</div>
		);

	}

	renderContactIcon()
	{
		return(
			<div className="icons">
			<svg className="iconsvg" xmlns="http://www.w3.org/2000/svg" height="24"
 				viewBox="0 0 24 24" width="24">
				<path d="M0 0h24v24H0zm0 0h24v24H0zm0 0h24v24H0z" fill="none"/>
				<path d="M20 0H4v2h16V0zM4 24h16v-2H4v2zM20 4H4c-1.1 0-2 .9-2
				 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-8 2.75c1.24 0
				 2.25 1.01 2.25 2.25s-1.01 2.25-2.25 2.25S9.75 10.24 9.75 9 10.76 6.75
				 12 6.75zM17 17H7v-1.5c0-1.67 3.33-2.5 5-2.5s5 .83 5 2.5V17z"/>
			</svg>
			</div>
		);

	}

	renderHomeIcon()
	{
		return(
			<div className="icons">
				<svg className="iconsvg" xmlns="http://www.w3.org/2000/svg"
					height="24" viewBox="0 0 24 24"
					width="24">
					<path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
					<path d="M0 0h24v24H0z" fill="none"/>
				</svg>
			</div>
		);

	}

	renderIconLabel(i)
	{
		return(
			<div className="iconlabelcontainer">
				<label className="iconlabel">
				{i}
				</label>
			</div>
		);

	}


	render()
	{
		return(
			<div className="dashleftpane">
				<div className="iconcontainer" >
					{this.renderHomeIcon()}
					{this.renderIconLabel("Home")}
				</div>
				<div className="iconcontainer" >
					{this.renderContactIcon()}
					{this.renderIconLabel("Contacts")}
				</div>
				<div className="iconcontainer" >
					{this.renderBillIcon()}
					{this.renderIconLabel("Bills")}
				</div>
			</div>
		);
	}

}

export default DashLeftPane;
