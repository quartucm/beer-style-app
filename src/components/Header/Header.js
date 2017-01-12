import styles from './Header.scss'
import React from 'react';
import { Link } from 'react-router';
import { history } from '../../store/index';



const Header = React.createClass({
	render() {
		return (
          <div className='pure-menu pure-menu-horizontal'>
              <a href='#' className='pure-menu-heading pure-menu-link'><h1>Ratings App</h1></a>
              <ul className='pure-menu-list'>
                  <li className='pure-menu-item'><a href='#' onClick={() => {history.goBack()}} className='pure-menu-link'>Back</a></li>
              </ul>
          </div>
		);
	}
});

export default Header;