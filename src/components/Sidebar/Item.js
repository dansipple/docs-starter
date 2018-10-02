import React, { Component } from 'react';
import classnames from 'classnames';

import Chevron from './Chevron';
import Link from '../Link';

import styles from './styles.module.css';

const hasActiveChild = (location, item) => {
  return item.items && item.items.find(i => {
      if (i.items) return hasActiveChild(location, i);
      return i.link === location.pathname;
  });
};

class Item extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);

    this.state = {
      open: hasActiveChild(this.props.currentPage, this.props.item)
    }
  }

  toggle() {
    this.setState({
      open: !this.state.open
    });
  }

  render() {
    const { item, currentPage } = this.props;

    if (item.items) {
      return (
        <li className={classnames(styles.ItemWithChildren, this.state.open && styles.ItemWithChildrenOpen)}>
          <button onClick={this.toggle} className={styles.ItemToggleButton}>
            <span className={classnames(styles.ItemToggleButtonText, this.state.open && styles.ItemToggleButtonTextActive)}>
              { item.title }
            </span>
            <Chevron isExpanded={this.state.open} />
          </button>
          <ul className={classnames(styles.ItemChildren, this.state.open && styles.ItemChildrenOpen)}>
            {
              item.items.map((subItem, index) => <Item key={index} item={subItem} currentPage={currentPage} />)
            }
          </ul>
        </li>
      )
    }
    return (
      <li className={styles.ItemLi}>
        <Link activeClassName={styles.ItemLinkActive} className={styles.ItemLink} to={item.link}>{ item.title }</Link>
      </li>
    )
  }
}

export default Item;
