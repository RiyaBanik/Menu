import React, { useState } from 'react'
import "./style.css";
import Menu from "./menuApi.js";
import MenuCards from "./Card.js";
import NavBar from "./NavBar.js";

const uniqueList = [
    ...new Set(Menu.map((curElem) => {
    return curElem.category;
}))];
console.log(uniqueList);
const Restaurent = () => {
    const [menuData, setMenuData] = useState(Menu);
    const [menuList, setMenuList] = useState(uniqueList);
   
    const filterItem = (category) => {
        if (category === "All") {
            setMenuData(Menu);
            return;
        }
        const updatedList = Menu.filter((curElem) => {
            return curElem.category===category;
        })
        setMenuData(updatedList);
    };
  return (
    <>
    <NavBar filterItem={filterItem} menuList={menuList} />
    <MenuCards menuData={menuData} />
    </>
  );
};

export default Restaurent;
