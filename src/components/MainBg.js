import React, { Component } from 'react';
import Button from './Button.js';
import styled from 'styled-components';

// props in styled component
// ${props => props.color ? props.color : 'white'}


const Ptag = styled.p`
	color: white;
	font-size: 66px;
	font-family: Courgette;
	padding-left: 120px;
	transition: 0.3s;
	@media(max-width:375px){
			padding: 0;
		}
`
const NameX = styled.span`
	font-size: 110px;
	color: white;
	padding-left: 215px;
	text-shadow: 1px 1px 1px;
	font-family: Courgette;
	@media(max-width:375px){
			padding: 0;
		}
`

class MainBg extends Component {
	constructor() {
		super();
		this.state = {};
	}

	render() {
		const container = {
			padding: '80px 55px'
		};
		const nameDiv = {
			position: 'relative',
			bottom: '50px'
		};
		const styleNameB = {
			fontSize: '110px',
			color: '#DB162F',
			textShadow: '1px 1px 1px',
			fontFamily: 'Courgette'
		};
		
		const buttonDiv = {
			padding: '20px 200px',
			display: 'flex'
		};

		return (
			<div className="Bg">
				<div style={container}>
					<div style={nameDiv}>
						<h1>
							<NameX>Xander's</NameX>
							<span style={styleNameB}> Barbershop</span>
						</h1>
					</div>
					<div>
						<Ptag>
							Best Dominican Barbershop<span> In Brooklyn</span>
						</Ptag>
					</div>
				</div>
				<div style={buttonDiv}>
					<Button></Button>
				</div>
			</div>
		);
	}
}

export default MainBg;
