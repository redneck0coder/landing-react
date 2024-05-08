import {Link} from "react-router-dom";
import cl from './Article.module.css'

const Article = ({article}) => {
    return (
        <Link className={cl.link} to={`/article/${article.id}`}>
            <article className={cl.article}>
                <h1 className={cl.title}>{article.title}</h1>
                <div className={cl.body}>{article.body}</div>
                <div className={cl.footer}>
                    <div className={cl.date}>{article.date}</div>
                    <div className={cl.tags}>
                        <div className={cl.budget}>#thins</div>
                        <div className={cl.budget}>#gamedev</div>
                        <div className={cl.budget}>#js</div>
                    </div>
                </div>
            </article>
        </Link>
    );
};

export default Article;