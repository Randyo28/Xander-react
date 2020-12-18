import React, { Component } from 'react';
// import IconBox from './IconBox.js';

class Services extends Component {
	constructor() {
		super();
		this.state = {};

		this.loopBox = this.loopBox.bind(this);
	}
	loopBox() {
		var { BoxData } = this.props;

		return BoxData.map((box, index) => {
			return (
				<div className="box" key={index}>
					<div>
						<img src={box.image} alt="scissor-icon" />
					</div>
					<p className="p1">{box.title}</p>
					<p className="p2">${box.price}</p>
				</div>
			);
		});
	}

	render() {
		const serviceBg = {
			display: 'grid',
			gridTemplateColumns: '1fr 1fr 1fr',
			gridAutoRows: 'minmax(300px, auto)',
			background: 'linear-gradient(45deg, grey, transparent)',
			alignItems: 'center',
			fontFamily: 'sans-serif'
		};
		const h1Service = {
			fontSize: '50px',
			paddingBottom: '40px'
		};
		const serviceP = {
			fontSize: '20px',
			letterSpacing: '2px',
			fontWeight: 'bold',
			margin: '0 117px'
		};
		const box1 = {
			gridColumn: '1/4',
			textAlign: 'Center',
			padding: '20px'
		};
		// const box = {
		// 	textAlign: 'Center',
		// 	padding: '20px'
		// };
		// const p1 = {
		// 	marginTop: '20px',
		// 	color: '#373c42',
		// 	fontWeight: 'bold',
		// 	paddingBottom: '20px'
		// };
		// const p2 = {
		// 	color: 'maroon',
		// 	fontWeight: '100'
		// };

		return (
			<div style={serviceBg}>
				<div style={box1}>
					<h1 style={h1Service}>Our Services & Prices</h1>
					<p style={serviceP}>
						Men's Hair-cut, $15. Men's Shape-Up, $10. Any service with a shave
						is an additional $3. Women's Hair-cut can vary from $2 to $20,
						Women's eyebrow's, $5.
					</p>
				</div>
				{this.loopBox()}
			</div>
		);
	}
}

export default Services;
