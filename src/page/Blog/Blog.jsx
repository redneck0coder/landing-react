import ArticleList from "../../components/ArticleList/ArticleList.jsx";
import Nav from "../../components/Nav/Nav.jsx"
import cl from './Blog.module.css'

const Blog = () => {
    return (
        <>
            <div className='navbar'>
                <Nav></Nav>
            </div>
            <section className={cl.container}>
                <ArticleList/>
            </section>
        </>

    );
};

export default Blog;