import Dish from "./Dish.jsx"

const menu = [
{ id: 1, name: "Dorowat", price: 500 },
{ id: 2, name: "Shiro", price: 200 },
{ id: 3, name: "Tibs", price: 300 },
];

function Menu(){
  return(
    <div className="menu">
      {
        menu.map(d=><Dish key={d.id} name={d.name} price={d.price} />) 
      }
    </div>
  )
}

export default Menu;