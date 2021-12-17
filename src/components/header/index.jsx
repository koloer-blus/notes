import * as React from 'react';
import { Link } from 'react-router-dom';
import Search from './search';
import headerStyle from './header.module.less';

const Header = () => {
  return (
    <div className={headerStyle['doc-header']}>
      <nav>
        <Link to="/">Home</Link>
      </nav>
      <Search />
    </div>
  )
};

export default Header;