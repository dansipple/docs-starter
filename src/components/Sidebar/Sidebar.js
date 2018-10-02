import React from 'react';
import { itemListDocs } from '../../utils/sidebar/item-list';

import Item from './Item';

import styles from './styles.module.css';

const Sidebar = ({ itemList, location }) => (
  <div className={styles.Sidebar}>
    <ul>
      {
        itemListDocs.map((item, index) => (
          <Item key={index} item={item} currentPage={location} />
        ))
      }
    </ul>
  </div>
);

export default Sidebar;

