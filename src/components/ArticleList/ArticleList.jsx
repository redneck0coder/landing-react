import {useState} from "react";
import Article from "../Article/Article.jsx";
import cl from './ArticleList.module.css'

const ArticleList = () => {

    const [articles, setArticles] = useState([
        {id: 1, title: 'Title 1', body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis ea, perspiciatis. Alias dolores error, fuga impedit ipsum minus modi molestiae nam nemo quae sed, tenetur voluptatum. Eum maiores quasi saepe.', published: true, date: '12.02.2024'},
        {id: 2, title: 'Title 2', body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis ea, perspiciatis. Alias dolores error, fuga impedit ipsum minus modi molestiae nam nemo quae sed, tenetur voluptatum. Eum maiores quasi saepe.', published: true, date: '12.02.2024'},
        {id: 3, title: 'Title 3', body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis ea, perspiciatis. Alias dolores error, fuga impedit ipsum minus modi molestiae nam nemo quae sed, tenetur voluptatum. Eum maiores quasi saepe. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis ea, perspiciatis. Alias dolores error, fuga impedit ipsum minus modi molestiae nam nemo quae sed, tenetur voluptatum. Eum maiores quasi saepe. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis ea, perspiciatis. Alias dolores error, fuga impedit ipsum minus modi molestiae nam nemo quae sed, tenetur voluptatum. Eum maiores quasi saepe. ', published: true, date:'12.02.2024'},
        {id: 4, title: 'Title 4', body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis ea, perspiciatis. Alias dolores error, fuga impedit ipsum minus modi molestiae nam nemo quae sed, tenetur voluptatum. Eum maiores quasi saepe. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis ea, perspiciatis. Alias dolores error, fuga impedit ipsum minus modi molestiae nam nemo quae sed, tenetur voluptatum. Eum maiores quasi saepe. ', published: true, date: '12.02.2024'},
    ])

    return (
        <div className={cl.list}>
            {articles.map((article) => article.published && <Article key={article.id} article={article} />)}
        </div>
    );
};

export default ArticleList;