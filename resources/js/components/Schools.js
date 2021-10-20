import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import StarRating from "./StarRating";
import StarRatingFixed from "./StarRatingFixed";
import Dropdown from 'react-dropdown';

const district = ['District 2', 'District 1', 'District 7'];
const program = ['ADP', 'AP', 'IB'];
const region = ['Ha Noi', 'Ho Chi Minh City'];

const Schools = (props) => {
    return (
        <Container>
            <SR>
            <h1>School Ratings</h1>
            </SR>
            <Sort>
                <h2>Sort by:</h2>
                <Dropdowns>
                    <Dropdown options={district} className="dropdown"/>
                    <Dropdown options={program} className="dropdown"/>
                    <Dropdown options={region} className="dropdown"/>
                </Dropdowns>
            </Sort>

            <SchoolsList>
               <a href='pennschool'>
                   <SchoolLink>
                        <img src="./images/schoolarea.svg"/>
                        PennSchool
                        <StarRatingFixed />
                        <div><a href='pennschool'>See more...</a></div>
                   </SchoolLink>
                </a>

               <a href='hibs'>
                   <SchoolLink>
                        <img src="./images/schoolarea.svg"/>
                        HIBS
                        <StarRatingFixed />
                        <div><a href='hibs'>See more...</a></div>
                   </SchoolLink>
                </a>

               <a href='tas'>
                   <SchoolLink>
                        <img src="./images/schoolarea.svg"/>
                        TAS
                        <StarRatingFixed />
                        <div><a href='tas'>See more...</a></div>
                   </SchoolLink>
                </a>
            </SchoolsList>
            
            <SchoolsList2>
            <a href='eis'>
                   <SchoolLink>
                        <img src="./images/schoolarea.svg"/>
                        EIS
                        <StarRatingFixed />
                        <div><a href='eis'>See more...</a></div>
                   </SchoolLink>
                </a>

               <a href='ais'>
                   <SchoolLink>
                        <img src="./images/schoolarea.svg"/>
                        AIS
                        <StarRatingFixed />
                        <div><a href='ais'>See more...</a></div>
                   </SchoolLink>
                </a>

               <a href='ishcmc'>
                   <SchoolLink>
                        <img src="./images/schoolarea.svg"/>
                        ISHCMC
                        <StarRatingFixed />
                        <div><a href='ishcmc'>See more...</a></div>
                   </SchoolLink>
                </a>
            </SchoolsList2>

            <Footer>
                <span>Business inquiries: ratemyschool.org@gmail.com</span>
            </Footer>
        </Container>
    )
};

const Footer = styled.div`
    display: flex;
    padding: 10px;
    position: relative;
    flex-wrap: wrap;
    width: 100%;
    max-width: 100%;
    align-items: center;
    justify-content: center;
    margin: auto;
    font-size:20px;

    @media (max-width:768){
        margin: auto;
        min-height: 0px;
        font-size:5px;
    }

`;

const Dropdowns = styled.div`
    display:flex;
`;

const SR = styled.div`
    max-width: 1300px;
    margin: auto;
    text-align:center;

    h1{
        font-size: 50px;

        @media (max-width:768px){
        width:100%;
        font-size:30px;
        }
    }
    
`;

const Container = styled.div`
    padding-top: 70px;
`;

const Sort = styled.div`
    max-width: 1300px;
    padding: 10px;
    height: 100px;
    margin:auto;
    text-align:center;

    @media (max-width:768px){
        font-size: 15px;
        margin: auto;
        min-height: 0px;
    }
`;

const SchoolsList = styled.div`
    max-width: 1300px;
    align-items: center;
    margin: auto;
    min-height: 300px;
    justify-content:center;
    display: flex;

    @media (max-width:768px){
        margin: auto;
        min-height: 100px;
        font-size: 10px;
    }

    a{
        text-decoration: none;
        color: black;
    }
`;

const SchoolsList2 = styled.div`
    max-width: 1300px;
    align-items: center;
    margin: auto;
    min-height: 300px;
    justify-content:center;
    display: flex;

    @media (max-width:768px){
        margin: auto;
        min-height: 100px;
        font-size: 10px;
    }

    a{
        text-decoration: none;
        color: black;
    }
`;

const SchoolLink = styled.div`
    padding: 10px;
    border-radius:15px;
    text-align:center;
    height: 300px;
    width: 300px;
    align-items: center;
    background-color: white;
    margin: 20px;
    transition: background-color 0.3s;
    border: 1px solid black;

    a{
        font-size: 15px;
        @media (max-width:768px){
        font-size: 5px;
        }
    }

    &:hover{
        background-color:lightgrey;
    }


    @media (max-width:768px){
        margin: 5px;
        height: 120px;
        width: 80px;
    }
`;


export default Schools;