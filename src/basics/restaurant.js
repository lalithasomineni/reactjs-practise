import React from 'react'
import "./style.css"
import Menu from "./menuapi.js"
import Menucard from "./menuCard.js"
import Navbar from "./navbar.js"


const uniqueList = [...new Set(Menu.map((curelement)=>{
  return curelement.category;
})), "All"
]

const Resturant = () => {
  const [menuData, setMenuData] = React.useState(Menu);
  const [menuList, setMenuList] = React.useState(uniqueList);

  const filter = (category) => {
    if (category === "All") {
      setMenuData(Menu);
      return;
    }

    const updatedList = Menu.filter((curElem) => {
      return curElem.category === category;
    });

    setMenuData(updatedList);
  };

  return (
    <>
      <Navbar filter={filter} menuList={menuList} />
      <Menucard menuData={menuData} />
    </>
  );
};

export default Resturant;


  




   