import "./item.css";

const Item = ({menu}) => {
	
	const {name, price, desc,img} = menu;
	
	return (
	  <div className="item">
		<div className="img-wrapper">
			<img className="img" src={img} alt={name}/></div>
		<div className="item-text">
			<h3>{name} <span>${price}</span></h3>
			 <p className="decriptions">{desc}.</p>
			</div>		
		</div>
	)
}


export default Item;