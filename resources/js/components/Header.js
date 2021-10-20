import styled from "styled-components";

const Header = (props) => {
    return (
        <Container>
            <Content>
                <Logo>
                    <a href="/">
                    <h1>Home</h1>
                    </a>
                </Logo>
                <Search>
                        <input type="text" placeholder="Search for a school..."/>
                        <button>Search</button>
                </Search>
                <a href='review' className="rs">Rate your school</a>
            </Content>
        </Container>
    )
}

const Container = styled.div`
    background-color: white;
    left: 0;
    width: 100vw;
    padding: 0 24px;
    padding-top: 8px;
    top: 0;
    z-index:100;
    position: fixed;

    @media (max-width: 768px){
            padding: 0 5px;
        }
`;

const Content = styled.div`
    display: flex;
    min-height: 100%;
    align-items: center;
    margin: 0 auto;
    max-width: 1300px;
    padding: 12px 0 16px;

    .rs{
        color: rgb(63,177,181);
        
        @media (max-width: 768px){
            display: none;
        }
    }

    @media (max-width: 768px){
            margin:auto;
        }


`;

const Logo = styled.span`
    margin-right: 20px;

    a{
        color: rgb(63,177,181);
        font-size: 20px;
    }

    @media (max-width: 768px){
            width: 50px;
        }

    img{
        height: 50px;
        width: 50px;
    }
`;

const Search = styled.div`
    opacity: 1;
    flex-grow: 1;
    position: relative;
    display: flex;

    button{
        height: 35px;
        background-color:lightgrey;
        border: none;
    }

        input{
            box-shadow:none;
            border:none;
            width:550px;
            padding: 0 8px 0 40px;
            line-height: 1.75px;
            font-size: 15px;
            height: 34px;
            vertical-align: text-top;
            background-color: #EEF3F8;

            @media (max-width: 768px){
            width: 150px;
            }
        }
`;

const SearchButton = styled.div`
    button {
        height:35px;
        width: 100px;
        background-color:grey;
        border: none;
    }

    @media (max-width: 768px){
            width: 10px;
            margin-right: 150px;
        }
    
`;


export default Header;