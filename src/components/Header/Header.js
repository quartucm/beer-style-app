import React from 'react';
import { Link } from 'react-router';
import { Appbar, Button, Panel } from 'muicss/react';
import { history } from '../../store/index';

const Header = React.createClass({
	render() {
		return (

			<div>			
				<Appbar>
					<h1>Ratings App</h1>
					<button onClick={() => {history.goBack()}}>Back</button>
				</Appbar>
	         </div>
		);
	}
});

export default Header;