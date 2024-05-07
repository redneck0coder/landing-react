import Nav from "../../components/Nav/Nav.jsx"
import cl from './Blog.module.css'

const Blog = () => {
    return (
        <>
            <div className='navbar'>
                <Nav></Nav>
            </div>
            <section className={cl.container}>
                <h1>Blog</h1>
            </section>
        </>

    );
};

export default Blog;