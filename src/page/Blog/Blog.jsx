import {Link} from "react-router-dom";
import ArticleList from "../../components/ArticleList/ArticleList.jsx";
import Container from "../../components/Container /Container.jsx";
import Navbar from "../../components/Navbar/Navbar.jsx";
import cl from './Blog.module.css'

const Blog = () => {
    return (
        <>
            <Navbar/>
            <Container>
                <Link className={cl.link} to={'/blog/create'}>+</Link>
                <ArticleList/>
            </Container>
        </>

    );
};

export default Blog;