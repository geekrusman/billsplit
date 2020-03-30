import React from 'react';
import './grid_layout.css';
import LoginBox from './loginbox/loginbox.js';
import DashLeftPane from './dashleftpane/dashleftpane.js';

class GridLayout extends React.Component
{
	constructor(props)
	{
		super(props);
		this.state = {
			var:0
		}
	}


	rendergrid_1()
	{
		return(
			<div className="grid1">
			</div>
		);
	}

	rendergrid_2()
	{
		return(
			<div className="grid2">
				<label className="titleappname">
				BILL SPLIT
				</label>
			</div>
		);
	}

	rendergrid_3()
	{
		return(
			<div className="grid3">

			</div>
		);
	}

	renderTopBar()
	{
		return(
			< div className="topbar" >
				{this.rendergrid_1()}
				{this.rendergrid_2()}
				{this.rendergrid_3()}
			</div>
		)
	}


	rendergrid_c1()
	{
		return(
			<div className="gridc1">
			</div>
		);
	}

	rendergrid_c2()
	{
		return(
			<div className="gridc2">
			{this.render_center_right()}
			</div>
		);
	}

	rendergrid_cr1()
	{
		return(
			<div className="gridcr1">
			c1
			</div>
		);
	}

	renderLoginContainer()
	{
		return(
			<LoginBox />
		);
	}


	rendergrid_cr_loginbox()
	{
		return(
			<div className="gridcrloginbox">
				{this.renderLoginContainer()}
			</div>
		);
	}

	render_center_right()
	{
		return(
			<div className="centerright">
				{/*this.rendergrid_cr1()*/}
				{/*this.rendergrid_cr1()*/}
				{/*this.rendergrid_cr1()*/}
				{/*this.rendergrid_cr1()*/}
				{this.rendergrid_cr_loginbox()}
			</div>
		);

	}


	renderDashLeftPane()
	{
		return(
			<DashLeftPane />
		);
	}


	/* Holds Left Dashboard Area*/
	render_dash_cgrid1()
	{
		return(
			<div className="dashcgrid1">
				{this.renderDashLeftPane()}
			</div>
		);

	}

	/*Main Dashboard Grid*/
	render_dash_cgrid2()
	{
		return(
			<div className="dashcgrid2">
			</div>
		);

	}

	/* Right Dashboard Area*/
	render_dash_cgrid3()
	{
		return(
			<div className="dashcgrid3">
			</div>
		);

	}


	renderCenterArea()
	{
		/* Uses 2 layouts
			1. For Login/Signup Page
			2. For Dashboard
		*/
		/*
		return(
			<div className="centerarea">
				{this.rendergrid_c1()}
				{this.rendergrid_c2()}
			</div>
		);
		*/

		return(
			<div className="centerareadashboard">
				{this.render_dash_cgrid1()}
				{this.render_dash_cgrid2()}
				{this.render_dash_cgrid3()}
			</div>
		);

	}

	render()
	{
		return(
			<div>
				{this.renderTopBar()}
				{this.renderCenterArea()}
			</div>
		);
	}
}

export default GridLayout;
