import {useState} from "react";

import "./header.css"

const HeaderLinks = ({categories, filterMenu}) => {
	
	const [active, setActive] = useState("All");
	
	const activeBtn = (cat) => {
		setActive(cat)
	}

	return (
		<div className="header">
		<h1>Our Menu</h1>
		<div className="underline"></div>	
			
	   <div className="header-links">
			{categories.map(category => {	
				return <div key={category} 
						   category={category} 
						   onClick={() => {filterMenu(category); activeBtn(category)}} 
						   className={`btn ${ active === category && "active"}`}> {category}</div>
			})}
		</div>
		</div>	
	)
}

export default HeaderLinks;