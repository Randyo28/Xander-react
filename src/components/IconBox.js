import React, { Component } from 'react';

export default class IconBox extends Component {
	constructor() {
		super();
		this.state = {};
	}

	render() {
		const box = {
			textAlign: 'Center',
			padding: '20px'
		};
		const p1 = {
			marginTop: '20px',
			color: '#373c42',
			fontWeight: 'bold',
			paddingBottom: '20px'
		};
		const p2 = {
			color: 'maroon',
			fontWeight: '100'
		};

		return (
			<div style={box}>
				<div>
					<img
						src="https://img.icons8.com/ios/100/000000/barber-scissors.png"
						alt="scissor-icon"
					/>
				</div>
				<p style={p1}>Men's Hair-Cut</p>
				<p style={p2}>$20</p>
			</div>
		);
	}
}
