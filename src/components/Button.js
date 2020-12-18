import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

export default class Button extends Component {
	constructor() {
		super();
		this.state = {
			hover: false
		};
	}
	hoverButton = () => {
		// console.log('it worked');
		this.setState({
			hover: !this.state.hover
		});
	};

	render() {
		const buttonStyle = {
			padding: '15px 11px',
			// borderRadius: '19%',
			backgroundColor: this.state.hover ? 'black' : 'rgb(219, 22, 47)',
			color: this.state.hover ? 'white' : 'black',
			width: '138px',
			margin: 'auto',
			textAlign: 'center',
			borderRadius: '25px',
			cursor: 'pointer',
			transition: 'all .4s ease-in-out'
		};

		return (
			<div
				style={buttonStyle}
				onMouseEnter={this.hoverButton}
				onMouseLeave={this.hoverButton}
			>
				Meet Our Barbers
			</div>
		);
	}
}
