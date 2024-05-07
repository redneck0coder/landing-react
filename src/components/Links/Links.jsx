import {useEffect, useState} from "react";
import cl from './Links.module.css';

const Links = () => {

    const linksData = [
        {label: '.docs', path: '#'},
        {label: '.telegram', path: '#'},
        {label: '.codepen', path: '#'},
        {label: '.git', path: '#'},
    ]

    const [links, setLinks] = useState([]);

    useEffect(() => {
        setLinks(linksData)
    }, []);

    return (
        <div className={cl.links}>
            {links.map(link => <a key={link.label} href={link.path}>{link.label} </a> )}
        </div>
    );
};

export default Links;