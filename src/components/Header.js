import React, { Component } from 'react';
import HeaderList from './HeaderList.js';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


const Headertag = styled.header`
	width: 100%;
	background-color: rgb(0,0,1,0.80);
	padding-top: 10px;
	display: flex;
	position: fixed;
	z-index: 1;
	`

class Header extends Component {
	constructor() {
		super();
		this.state = {};
	}

	render() {
		// const styleHeader = {
		// 	width: '100%',
		// 	backgroundColor: 'rgb(0,0,1,0.80)',
		// 	paddingTop: '10px',
		// 	display: 'flex',
		// 	position: 'fixed',
		// 	zIndex: '1',
		// };
		const styleLogoArea = {
			padding: '0 20px'
		};
		const styleLogoImg = {
			height: '60px',
			cursor: 'pointer'
		};
		const styleList = {
			paddingTop: '10px',
			// paddingLeft: '898px',
			marginLeft: 'auto',
			display: 'flex'
		};

		return (
			<Headertag >
				<Link to="/Xander-react">
					<div className="logo-area" style={styleLogoArea}>
						<img style={styleLogoImg} src="/assets/img/barber-logo-black.png" alt="logo" />
					</div>
				</Link>
				<ul className="ul-list" style={styleList}> 
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
				</ul>
			</Headertag>
		);
	}
}

export default Header;
