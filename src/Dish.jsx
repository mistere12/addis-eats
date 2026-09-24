function Dish ({name,price}){  //destructuring
    return(
        <div className ="dish">
            <h3>{name}</h3>
            <p>{price} ETB</p>
        </div>
    );
}

export default Dish;