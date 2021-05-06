
import Item from "../item/item";
import "./items.css";


const Items = ({menu}) => {
	
     	
	

	const RenderedList = menu.map((dish) => {
	   return ( <Item key={dish.id} menu={dish}/> )
	  })
	
	return (
		<div className="items">
			 {RenderedList}
		</div>
	 
	)
}


export default Items;