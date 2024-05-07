import Clip from "../UI/Clip/Clip.jsx";
import style from './Header.module.css'

const Header = () => {
    return (
        <header className={style.header}>
            <div className={style.image}/>
            <div className={style.title}>User Name</div>
            <Clip>frontend developer</Clip>
        </header>
    );
};

export default Header;