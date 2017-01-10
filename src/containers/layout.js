import React from 'react';
import Header from '../components/Header/Header';

type Props = {
  children: any
};

const Layout = (props: Props) => {
	return (
		  <div>
		  <Header/>
		  {props.children}
		  </div>
	)
};

export default Layout;
