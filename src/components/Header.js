import React, { Component } from 'react';
import HeaderList from './HeaderList.js';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Logo from '../img/barber-logo-black.png';


const Headertag = styled.header`
	width: 100%;
	background-color: rgb(0,0,1,0.80);
	padding-top: 10px;
	display: flex;
	position: fixed;
	z-index: 1;
		@media(max-width:375px){
			
		}
`
const HamContainer = styled.div`
	display:none;
		@media(max-width:375px){
			position: absolute;
			display: block;
			top:0;
			right:0;
			font-size: 55px;
			padding: 13px 22px;
			color:white;
		} 
`
const Bars = styled.div`
	display:none;
		@media(max-width:375px){
			display:block;
			width: 35px;
			height: 5px;
			background-color: white;
			margin: 6px 0;
			transition: 0.4s;
				}
`

const UlList = styled.ul`
	padding-top: 10px;
	margin-left: auto;
	display: flex;
	@media(max-width:375px){
			display:none;
		}
`

class Header extends Component {
	constructor(props) {
		super(props);
		this.state = {
			
		}

		this.navOpen = this.navOpen.bind(this);
	}

	navOpen = e => {
		
		console.log('yes')
	  }

	render() {
		
		const styleLogoArea = {
			padding: '0 20px'
		}
		const styleLogoImg = {
			height: '60px',
			cursor: 'pointer'
		}
	
		return (
			<Headertag>
				<Link to="/Xander-react">
					<div className="logo-area" style={styleLogoArea}>
						<img style={styleLogoImg} src={Logo} alt="logo" />
					</div>
				</Link>
				<UlList> 
					<Link to="/barber">
					 	<HeaderList color="red">
							Barber
						</HeaderList>
					</Link>
					<Link to="/service">
						<HeaderList color="orange">
							Services
						</HeaderList>
					</Link>
					<HeaderList color="purple">
						Location
					</HeaderList>
					<HeaderList color="blue">
						Contact
					</HeaderList>
				</UlList>
				<HamContainer onClick={this.navOpen}>
				<Bars></Bars>
				<Bars></Bars>
				<Bars></Bars>
				</HamContainer>
			</Headertag>
		);
	}
}

export default Header;
