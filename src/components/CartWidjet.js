import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const CartWidget = () => {
    return(
    <button className="btn btn-warning ms-auto">
        <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon>
    </button>
    );
    
}


export default CartWidget