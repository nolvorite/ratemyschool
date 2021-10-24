import styled from 'styled-components';
import StarRating from './StarRating';
import StarRatingFixed from './StarRatingFixed';

const Home = (props) => {
    return (
        <Container>
            <Nav>
                <a href="/">
                    <Logo>RateMySchool</Logo>
                </a>
                <div>
                    <Join><a href="/about">About Us</a></Join>
                    <Schools><a href="/schools">View Ratings</a></Schools>
                </div>
            </Nav>
            <Section>
                <Hero>
                    <h2>School-rating online platform for students.</h2>
                    <img src="/images/schoolarea.svg"/>
                </Hero>
                <Form>
                    <Review>
                        <a href="/review">Start rating my school!</a>
                    </Review>
                </Form>
            </Section>
            <Discover>
                <h1>Discover Reviews</h1>
                <SchoolsList>
                {schoolData.slice(0,3).map((data, i) => {
                    return (

                        <a href={'/schools/'+data.school_name}>
                           <SchoolLink>
                                <img src="/images/schoolarea.svg"/>
                                {data.school_name}
                                <StarRating rating={data.true_average} />
                                <div>See more...</div>
                           </SchoolLink>
                        </a>
                    )
                })}
              
            </SchoolsList>
            <More>
                <a href="/schools">More schools...</a>
            </More>
            </Discover>
            <Middle>
                <h3>Over 30+ Schools all over Vietnam with genuine ratings and reviews from students.</h3>
            </Middle>
            <Footer>
                <span>Business inquiries: ratemyschool.org@gmail.com</span>
            </Footer>
        </Container>
    );
};



const Container = styled.div`
    padding: 0px;
`;

const More = styled.div`
    a{
        color: black;
        font-size:30px;

        @media (max-width: 768px){
            font-size:20px;
        }
    }
   
`;

const Nav = styled.nav`
    max-width: 1300px;
    margin: auto;
    padding: 12px 0 16px;
    display:flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    flex-wrap: nowrap;

    a{
        text-decoration:none;
        color: black;
    }

    a * {
        text-decoration: none;
        padding-top: 20px;

        @media (max-width: 768px){
            padding: 0px;
            font-size:15px;
        }
    }

`;


const Logo = styled.div`
    font-size: 30px;
`;

const Join = styled.a`
    font-size: 16px;
    padding: 10px 12px;
    text-decoration: none;
    border-radius: 15px;
    background-color:rgb(63,77,121);
    transition: background-color 0.3s;

    a{
        text-decoration:none;
        color: white;
        transition: color 0.3s;
    }

    @media (max-width: 768px){
            padding: 5px;
            font-size:15px;
        }

    &:hover{
        background-color:rgb(255,176,0);
        text-decoration: none;
    }
`;

const Schools = styled.a`
    margin-left: 5px;
    font-size: 16px;
    padding: 10px 12px;
    text-decoration: none;
    color: white;
    background-color:rgb(63,77,121);
    transition: background-color 0.3s;
    border-radius: 15px;

    a{
        text-decoration:none;
        color: white;
        transition: color 0.3s;
    }

    @media (max-width: 768px){
            padding: 5px;
            font-size:15px;
        }

    &:hover{
        background-color:rgb(255,176,0);
        text-decoration: none;
    }
`;

const Section = styled.section`
    align-content: start;
    display: flex;
    min-height:500px;
    padding-bottom: 138px;
    padding-top: 40px;
    padding: 60px 0;
    position: relative;
    flex-wrap: wrap;
    width: 100%;
    max-width: 1300px;
    align-items: center;
    margin: auto;

    @media (max-width:768px){
        margin: auto;
        min-height: 0px;
    }
`;

const Hero = styled.div`
    width: 100%;

    h2{
        padding-bottom: 0;
        width: 55%;
        font-size: 60px;
        font-weight: 350px;
        line-height: 70px;

        @media (max-width: 768px) {
            text-align: center;
            font-size: 25px;
            width: 100%;
            line-height: 2;
        }
    }

    img{
        z-index:-1;
        width: 780px;
        height: 670px;
        position: absolute;
        top: 5px;
        bottom: -2px;
        right: 0;

        @media(max-width:768px){
            top: 230px;
            width:initial;
            position: initial;
            height: initial;
        }
    }
`;

const Form = styled.div`
    margin-top: 100px;
    width: 400px;

    @media (max-width: 768px) {
            margin-top: 20px;
    }
`;

const Review = styled.button`
    display: flex;
    justify-content: center;
    background-color:rgb(255,176,0);
    height: 56px;
    width: 100%;
    border: none;
    align-items: center;
    border-radius: 15px;
    transition: background-color 0.3s;

    a{
        text-decoration:none;
        font-family:"Montserrat";
        color: white;
        font-size: 18px;

        @media (max-width: 768px) {
            font-size:15px;
    }
    }

    vertical-align: middle;
    z-index:0;
    font-size: 20px;

    &:hover{
        background-color:rgb(63,77,121);
    }
`;

const Middle = styled.div`
    align-content: start;
    display: flex;
    min-height:400px;
    padding-bottom: 138px;
    justify-content: center;
    padding: 60px 0;
    position: relative;
    font-size: 50px;
    flex-wrap: wrap;
    width: 100%;
    max-width: 1300px;
    align-items: center;
    margin: auto;

    @media (max-width:768){
        margin: auto;
        min-height: 0px;
    }

   
`;

const Discover = styled.div`
    min-height:400px;
    padding-bottom: 138px;
    position: relative;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    max-width: 1300px;
    align-items: center;
    margin: auto;
    text-align: center;

    h1{
        font-size: 50px;
    }

    @media (max-width:768){
        margin: auto;
        min-height: 0px;
    }
`;

const SchoolsList = styled.div`
    max-width: 1300px;
    align-items: center;
    margin: auto;
    background-color: white;
    min-height: 500px;
    justify-content:center;
    display: flex;

    @media (max-width:768px){
        margin: auto;
        min-height: 300px;  
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
    height: 320px;
    width: 300px;
    border: 1px solid black;
    align-items: center;
    background-color: white;
    margin: 20px;
    transition: background-color 0.3s;

    &:hover{
        background-color:lightgrey;
    }

    a{
        font-size: 15px;
    }


    @media (max-width:768px){
        margin: 5px;
        font-size: 10px;
        height: 120px;
        width: 80px;

        a{
            font-size: 5px;
        }
    }
`;

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

export default Home;