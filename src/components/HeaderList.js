/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import styled from 'styled-components';

const ListLi = styled.li`
	color:white;
	display: inline-block;
	padding: 12px 115px 0 15px;
	cursor: pointer;
	font-size: 25px;
	transition: all .3s ease-in-out;
		:hover{
			color:${props => props.color ? props.color : 'white'}
		};
		@media(max-width:375px){
			padding: 12px 15px;
		}
`


export default class HeaderList extends Component {
	constructor() {
		super();
		this.state = {};
	}

	// hoverLi = () => {
	// 	// console.log('it worked');
	// 	this.setState({
	// 		hover: !this.state.hover
	// 	});
	// };

	render() {
		// const styleListLi = {
		// 	display: 'inline-block',
		// 	padding: '12px 115px 0 15px',
		// 	cursor: 'pointer',
		// 	fontSize: '25px',
		// 	transition: 'all .3s ease-in-out',
		// 	color: this.state.hover ? this.props.hoverColor : 'white'
		// };
	
		return (
			<ListLi color={this.props.color} >
					{this.props.children}
			</ListLi>
		);
	}
}
