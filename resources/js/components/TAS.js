import styled from "styled-components";
import StarRating from "./StarRating";
import StarRatingFixed from "./StarRatingFixed";

const TAS = (props) => {
    return (
        <Container>
            <Content>
            <a href="schools">See more schools...</a>
            <h1>TAS</h1>
            </Content>
            <ContentMain>
                <Campus>
                    <div><h2>Campus</h2></div>

                    <span>Location</span>
                    <StarRatingFixed />
                    <span>Size</span>
                    <StarRatingFixed />
                    <span>Cleanliness</span>
                    <StarRatingFixed />
                </Campus>
                <Teachers>
                    <div><h2>Teachers</h2></div>
                    
                    <span>Teaching Quality</span>
                    <StarRatingFixed />
                    <span>Friendliness</span>
                    <StarRatingFixed />
                </Teachers>
                <Students>
                    <div><h2>Students</h2></div>
                    
                    <span>Friendliness</span>
                    <StarRatingFixed />
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

export default TAS;