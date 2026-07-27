import React from "react";


const ProductCard = (props) => {


    return (
        <div>
            <div className="card" style={{width:"18rem"}}>
                
                <img 
                src={props.image} 
                className="card-img-top" 
                alt={props.name}
                style={{height:'200px',objectFit:'cover'}}
                />
                    <div className="card-body">
                        <h5 className="card-title">{props.name}</h5>
                        
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">{props.price}</li>
                        <li className="list-group-item">{props.rating}</li>
               
                    </ul>
           
            </div>
        </div>
    )
}


export default ProductCard;