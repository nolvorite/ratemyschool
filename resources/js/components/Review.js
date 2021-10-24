import styled from "styled-components";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import StarRating from "./StarRating";

const RedirectFormData = () =>{

}

const Review = (props) => {

    return (
        <Container>
            <Content>
                <h1>Complete a review</h1>
            </Content>
            <ReviewForm>
                    
                <Rating>
                    <h2>Choose your school</h2>
                    <Dropdown options={options} className="dropdown"/>
       

                    <h1>Campus</h1>
                    <span>Location</span>
                    <StarRating prop="location" />
                    <span>Size</span>
                    <StarRating prop="size" />
                    <span>Ease of navigation</span>
                    <StarRating prop="ease_of_navigation" />
                    <span>Campus Cleanliness</span>
                    <StarRating prop="campus_cleanliness" />
                    <span>Bathroom Cleanliness</span>
                    <StarRating prop="bathroom_cleanliness" />
                    <span>Classroom Cleanliness</span>
                    <StarRating prop="classroom_cleanliness" />
                    <span>Amenities</span>
                    <StarRating prop="amenities" />

                    <h1>Teachers</h1>
                    <span>Friendliness</span>
                    <StarRating prop="friendliness" />
                    <span>Teaching quality</span>
                    <StarRating prop="teaching_quality" />

                    <h1>Students</h1>
                    <span>Friendliness</span>
                    <StarRating prop="student_friendliness" />

                    <h1>Would recommend to a friend</h1>
                    <StarRating prop="would_recommend" />
                    <button id="submit_review">Submit Review</button>



                </Rating>
            </ReviewForm>
        </Container>
    )
};

const Rating = styled.div`

    h1{
        font-size: 50px;
        margin-top:50px;
    }

    button{
        margin-top:30px;
        height: 50px;
        width: 300px;
        background-color:white;
        font-family: "Montserrat", sans-serif;

        @media (max-width:768px){
        width:100%;
        }
    }

    span{
        font-size:30px;
    }

`;

const options = [
    'HIBS', 'TAS', 'AIS', 'ISHCMC', 'PennSchool', 'EIS'
  ];

const Container = styled.div`
    margin-top: 100px;
`;

const Content = styled.div`
    max-width: 1300px;
    margin: auto;
    text-align: center;

    h1{
        font-size: 50px;
    }
`;

const ReviewForm = styled.form`
    padding-top: 50px;
    max-width: 1300px;
    margin: auto;
    text-align: center;

    h1{
        color: darkcyan;
    }

    h2{
        font-size: 35px;

        @media (max-width:768px){
            font-size:25px;
        }
    }

`;



export default Review;


