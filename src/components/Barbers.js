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

const BarberDiv = styled.div`
	padding: 30px;
    text-align: center;
`

const BarberPhoto = styled.img`
	width: 69%;
    box-shadow: 7px 3px 10px 3px #000000;
	transition: all .5s ease-in-out;
	&:hover{
		box-shadow: 11px 7px 17px 7px #000000;
	}
`

const BName = styled.h3`
	font-size: 40px;
    margin-top: 20px;
`

const BH5 = styled.h5`
	 margin-top: 10px;
     font-size: 20px;
`

class Barbers extends Component {
	constructor() {
		super();
		this.state = {};

		this.loopBarber = this.loopBarber.bind(this);
	}

	loopBarber() {
		var { BarberData } = this.props;

		return BarberData.map((box, index,) => {
			return (
				<>
					<BarberDiv key={index}>
							<BarberPhoto src={box.image}  alt="barber"></BarberPhoto>
							<BName>{box.name}</BName>
							<BH5>Hours Available:</BH5>
							<BH5>10am - 7pm</BH5>
							<BH5>Day off: {box.dayOff}</BH5>
					</BarberDiv>
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
