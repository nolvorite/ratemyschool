import styled from "styled-components";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import StarRating from "./StarRating";

const About = (props) => {
    return (
        <Container>
            <AboutUs>
                <h1>About us</h1>
                <span>Founded and Developed by Pete Tran, 2021.</span>
            </AboutUs>
        </Container>
    )
} 

const Container = styled.div`
    margin-top: 100px ;
    width: 100%;
`;

const AboutUs = styled.div`
    h1{
        font-size: 50px;
    }

    text-align:center;
    margin:auto;
    max-width:1300px;
`;

export default About;