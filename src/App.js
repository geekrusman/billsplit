import React from 'react';
import './App.css';
import GridLayout from './layouts/grid_layout.js'


class App extends React.Component
{
	constructor(props)
	{
		super(props);
		this.state = {
			var1 : 0
		}
	}

	/*
	 * Renders basic grid layout
	 */
	renderGrids()
	{
		return <GridLayout />;

	}

	render()
	{
		return(
			<div className="App">
				{this.renderGrids()}
			</div>
		);
	}

}

export default App;
