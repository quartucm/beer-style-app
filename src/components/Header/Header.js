import React from 'react';
import { Link } from 'react-router';

const Header = React.createClass({
	render() {
		return (
			<div><h1>Ratings App</h1>
				 <Link to='/beer'>
		            Back
		         </Link>
	         </div>
		);
	}
});

export default Header;