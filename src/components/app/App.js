import {useState} from "react";

import HeaderLinks from "../header/header";
import Items from "../items/items";
import menu from "../../menu"

import './App.css';

const allCategories = ["All", ...new Set(menu.map(item => item.category))];


function App() {
	
	const [menuList, setMenuList] = useState(menu);

	const filterMenu = (category) => {
		
		if (category === "All"){
			setMenuList(menu);
			return
		} 
		
		const filteredMenu = menu.filter(item => item.category === category);
		setMenuList(filteredMenu);
	}
	
	
  return (
    <div className="app">	  
      <HeaderLinks filterMenu={filterMenu} categories={allCategories}/>
		  <Items menu={menuList}/>
    </div>
  );
}

export default App;
