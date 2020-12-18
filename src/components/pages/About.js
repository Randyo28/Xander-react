import React, { Component } from 'react';
import axios from 'axios';

class About extends Component {
	state = {
		todos: []
	}


	componentDidMount(){
		axios.get('https://jsonplaceholder.typicode.com/todos')
		.then(res => this.setState({todos: res.data}))
	}

	render() {
		return (
			<div>
				<h1 style={h1Style}>About</h1>
				<p style={pStyle}>this is my about page</p>
			</div>
		);
	}
}

const h1Style = {
	fontSize: '50px'
};

const pStyle = {
	fontSize: '30px'
};

export default About;
