import React from "react";
import flower from "../../img/flower.jpg"

//create your first component
const Card = (props) => {
    return (
            <div className="card" style={{ width: "18rem" }}>
                <img className="card-img-top" src= {flower} alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">{props.text}</p>
                    <a href="#" className="btn btn-primary">Find out more!</a>
                </div>
            </div>
    );
};

export default Card;