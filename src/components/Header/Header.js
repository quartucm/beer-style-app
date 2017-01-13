import React from 'react';
import { Link } from 'react-router';
import { history } from '../../store/index';
import styles from './Header.scss';


const Header = React.createClass({
	render() {
		return (
          <header className=''>
              <Link to="/"><h1>Beer Info Catalog</h1></Link>
            {/*<ul className='pure-menu-list'>
                <li className='pure-menu-item'><a href='#' onClick={() => {history.goBack()}} className='pure-menu-link'>Back</a></li>
            </ul>*/}
          </header>
		);
	}
});

export default Header;