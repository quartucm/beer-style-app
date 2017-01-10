import React from 'react';
import { Link } from 'react-router';

const Home = React.createClass({
	render() {
		return (
			<div>Explore some styles of beer <br/>
		 		<Link to={`beer`}>
		 			CLICK ME
		 		</Link>
			</div>
		);
	}
});

export default Home;
