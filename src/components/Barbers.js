import React, { Component } from 'react';
import styled from 'styled-components';


const BarbersStyle = styled.section`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	grid-auto-rows: minmax(300px, auto);
	align-items: center;
	background: linear-gradient(502deg, grey, transparent);
	font-family: sans-serif;
		@media(max-width:375px){
			display: block;
			align-items: center;
			background: linear-gradient(502deg, grey, transparent);
			font-family: sans-serif;
	}
`

const DivStyle = styled.div`
	padding-top: 20px;
	text-align: center;
	grid-column: 2/3;
	@media(max-width:375px){
		padding-top: 100px;
		text-align: center;
	}
`

class Barbers extends Component {
	constructor() {
		super();
		this.state = {};

		this.loopBarber = this.loopBarber.bind(this);
	}

	loopBarber() {
		var { BarberData } = this.props;

		return BarberData.map((box, index, key="barbers") => {
			return (
				<>
					<div className="barberDiv" key={index}>
							<img className="barberPhoto" src={box.image}  alt="barber"></img>
							<h3 className="bName">{box.name}</h3>
							<h5 className="bH5">Hours Available:</h5>
							<h5 className="bH5">10am - 7pm</h5>
							<h5 className="bH5">Day off: {box.dayOff}</h5>
					</div>
				</>
			);
		});
	}

	render() {
		const h1Style = {
			fontSize: '70px',
			fontFamily: 'Lucida Sans Unicode',
			fontStyle: 'oblique'
		};
		
		const emptyDiv = {
			// gridColumn: '1/4',
			gridArea: 'auto'
		};

		return (
			<BarbersStyle >
				<DivStyle>
					<h1 style={h1Style}>Our Barbers</h1>
				</DivStyle>
				<div style={emptyDiv}></div>
				{this.loopBarber()}
			</BarbersStyle>
		);
	}
}

export default Barbers;
