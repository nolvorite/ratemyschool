import styled from "styled-components";
import StarRating from "./StarRating";
import StarRatingFixed from "./StarRatingFixed";

const AIS = (props) => {
    return (
        <Container>
            <Content>
            <a href="schools">See more schools...</a>
            <h1>AIS</h1>
            </Content>
            <ContentMain>
                <Campus>
                    <div><h2>Campus</h2></div>

                    <span>Location</span>
                    <StarRatingFixed name="AIS-location"/>
                    <span>Size</span>
                    <StarRatingFixed name="AIS-size"/>
                    <span>Cleanliness</span>
                    <StarRatingFixed name="AIS-cleanliness"/>
                </Campus>
                <Teachers>
                    <div><h2>Teachers</h2></div>
                    
                    <span>Teaching Quality</span>
                    <StarRatingFixed name="AIS-teaching-quality"/>
                    <span>Friendliness</span>
                    <StarRatingFixed name="AIS-teacher-friendliness"/>
                </Teachers>
                <Students>
                    <div><h2>Students</h2></div>
                    
                    <span>Friendliness</span>
                    <StarRatingFixed name="AIS-student-friendliness"/>
                </Students>
            </ContentMain>
        </Container>
    )
};

const Container = styled.div`
    margin-top: 100px;
`;

const Campus = styled.div`
    height: 300px;
`;

const Teachers = styled.div`
    height: 300px;
`;

const Students = styled.div`
    height: 300px;
`;

const Content = styled.div`
    max-width: 1300px;
    align-items: center;
    margin: auto;
    text-align: center;

    h1{
        font-size:30px;
    }

    a{
        color: black;
    }

`;

const ContentMain = styled.div`
    padding-top: 50px;
    max-width: 1300px;
    align-items: center;
    margin: auto;

    h1{
        font-size: 50px;
    }

    h2{
        margin-bottom: 20px;
    }
`;


export default AIS;
