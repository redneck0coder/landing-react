import {useEffect} from "react";
import {useLocation, useParams} from "react-router-dom";
import Nav from "../../components/Nav/Nav.jsx";

const ArticlePage = () => {

    const location = useLocation();
    const params = useParams();
    useEffect(() => {
        console.log(params)
    }, []);
    return (
        <>
            <div className='navbar'>
                <Nav></Nav>
            </div>
            <section>
                <h1>Page Article {params.id}</h1>
            </section>
        </>
    );
};

export default ArticlePage;