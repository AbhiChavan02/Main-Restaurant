import React from 'react';
import './MenuItem.css';

const MenuItem = ({ title, price, tags }) => (
  <div className="app_menuitem">
    <div className="app_menuitem_head">
      <div className="app_menuitem_name">
        <p className="p_cormorant" style={{ color: '#392811' }}>{title}</p>
      </div>
      <div className="app_menuitem_dash" />
      <div className="app_menuitem_price">
        <p className="p_cormorant">{price}</p>
      </div>
    </div>

    <div className="app_menuitem_sub">
      <p className="p_open" style={{ color: '#5f3d3d' }}>{tags}</p>
    </div>
  </div>
);

export default MenuItem;
