import React from 'react';
import Header from './Header';
import Theming from './Theming';

function Layout(props) {
  return (
    <Theming>
      <Header />
      {props.children}
    </Theming>
  );
}

export default Layout;
