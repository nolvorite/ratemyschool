import styled from "styled-components";
import StarRating from "./StarRating";
import StarRatingFixed from "./StarRatingFixed";

const ViewSchool = (props) => {
    return (
        <Container>
            <Content>
            <a href="/schools">See more schools...</a>
            <h1 id='school_name'>{schoolData.school_name}</h1>
            </Content>
            <ContentMain>
                <Campus>
                    <div><h2>Campus</h2></div>

                    <span>Location</span>
                    <StarRating prop="location" rating={schoolData.location} />
                    <span>Size</span>
                    <StarRating prop="size" rating={schoolData.size} />
                    <span>Cleanliness</span>
                    <StarRating prop="campus_cleanliness" rating={schoolData.campus_cleanliness} />
                </Campus>
                <Teachers>
                    <div><h2>Teachers</h2></div>
                    
                    <span>Teaching Quality</span>
                    <StarRating prop="teaching_quality" rating={schoolData.teaching_quality} />
                    <span>Friendliness</span>
                    <StarRating prop="teacher_friendliness" rating={schoolData.friendliness} />
                </Teachers>
                <Students>
                    <div><h2>Students</h2></div>
                    
                    <span>Friendliness</span>
                    <StarRating prop="student_friendliness" rating={schoolData.student_friendliness} />
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


export default ViewSchool;
