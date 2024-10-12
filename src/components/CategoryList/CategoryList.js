'use client';
import { React, useState } from 'react';
import Link from 'next/link';
import styles from './Category.module.css';
import clsx from 'clsx';
import { allArray, subListDic } from '../constants';

function CategoryList() {
  const [record, setRecord] = useState([]);
  let data = allArray;
  function handleClick(event) {
    const href = event.target.getAttribute('href');
    const key = href.split('/').at(-1);
    const hasPop = handlePopup(key);
    
    if (hasPop && record.at(-1) !== key) {
      event.preventDefault();
      const newRecord = [...record, key];
      setRecord(newRecord);
      return;
    }
    
  }

  function handlePopup(item) {
    if (item in subListDic) {
      return true;
    }
    return false;
  }

  function handleHref(item) {

    if (item === "All") {
      return "/All";
    }
    const threeLetter = item.substring(0, 3);

    if (item.length > 3 && threeLetter === "All") {
      return record.join().replace(",", "/");
    } else {
      return record.join().replace(",", "/") + "/" + item;
    }
  }

  function handleData() {
    // first render or no item select render
    if (record.length === 0) {
      return;
    }
    const lastKey = record.at(-1);
    const first = "All " + lastKey;
    data = [first].concat(subListDic[lastKey]);
  }

  function handleBackward() {
    const newRecord = record.slice(0, -1);
    setRecord(newRecord);
  }

  handleData();
  return (<div className={styles.wrapper} role="menu" aria-label='category'>
    {record.length !== 0 && <Link key={-1} role="menuitem" className={clsx(styles.item, styles.nav)} href={"/"} onClick={handleBackward}> Back </Link>}
    {data.map((item, index) => {

      const otherAttributes = handlePopup(item) ? {"aria-haspopup": "menu"} : {"data-nopopup": "true"};
      const hrefStr = handleHref(item);
      return <Link key={index} role="menuitem" className={styles.item} href={`${hrefStr}`} onClick={handleClick} {...otherAttributes}> {item} </Link>
    })}

  </div>);
}

export default CategoryList;
