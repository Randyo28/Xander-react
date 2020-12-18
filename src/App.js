import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header.js';
import MainBg from './components/MainBg.js';
import Services from './components/Services.js';
import BoxData from './components/Data/BoxData.js';
import Barbers from './components/Barbers.js';
import BarberData from './components/Data/BarberData.js';


class App extends Component {
	constructor() {
		super();
		this.state = {
			name: 'Randy',
			BoxData,
			BarberData
		};
	}

	render() {
		return (
			<Router>
				<section className="container">
				<Header />
					<Route exact path="/Xander-react"
						render={props => (
							<React.Fragment>
								<MainBg />
							</React.Fragment>
						)}
					/>
					<Route  path="/barber" render={props => (
							<React.Fragment>
								<Barbers BarberData={this.state.BarberData} />
							</React.Fragment>
						)} />
					
					<Route exact path="/service" render={props => (
							<React.Fragment>
								<Services BoxData={this.state.BoxData} />
							</React.Fragment>
						)} />
				</section>
			</Router>
		);
	}
}

		// <Router>
		// 		<section className="container">
		// 			<Route exact path="/"
		// 				render={props => (
		// 					<React.Fragment>
		// 						<Header />
		// 						<MainBg />
		// 						<Services BoxData={this.state.BoxData} />
		// 						<Barbers BarberData={this.state.BarberData} />
		// 					</React.Fragment>
		// 				)}
		// 			/>
		// 			<Route path="/about" component={About} />
		// 		</section>
		// 	</Router>

export default App;
