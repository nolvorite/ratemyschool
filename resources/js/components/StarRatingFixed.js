import React, {useState} from "react";
import {FaStar} from "react-icons/fa";

const StarRating = () => {
    const [rating, setRating] = useState(null);

    return (
        <div>
            {[...Array(5)].map((star) => {

                return (
                        <FaStar className="star" color="#ffc107"/>
                )
            })}
        </div>
    )
}


export default StarRating;