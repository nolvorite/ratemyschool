import React, {useState} from "react";
import {FaStar} from "react-icons/fa";

const StarRating = (props) => {
    var [rating, setRating] = useState(null);

    if(typeof props.rating === 'string'){
        rating = parseInt(props.rating);
    }

    return (
        <div class='star_rating'>
            {[...Array(5)].map((star, i) => {
                const ratingValue = i + 1;
                return (
                    <label key={'prop_'+ props.prop +'_'+i}>
                        <input 
                        type="radio" 
                        className="radio" 
                        name={props.prop} 
                        value={ratingValue} 
                        onClick={() => setRating(ratingValue)}/>
                        <FaStar className="star" color={ratingValue <= rating ? "#ffc107" : "grey"}/>
                    </label>
                )
            })}

        </div>
    )
}

export default StarRating;