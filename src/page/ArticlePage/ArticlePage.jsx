import {useEffect} from "react";
import {useLocation, useParams} from "react-router-dom";
import Container from "../../components/Container /Container.jsx";
import Nav from "../../components/Nav/Nav.jsx";
import Navbar from "../../components/Navbar/Navbar.jsx";

const ArticlePage = () => {

    const location = useLocation();
    const params = useParams();
    useEffect(() => {
        console.log(params)
    }, []);
    return (
        <>
            <Navbar/>
            <Container>
                <h1>Page Article {params.id}</h1>
            </Container>
        </>
    );
};

export default ArticlePage;