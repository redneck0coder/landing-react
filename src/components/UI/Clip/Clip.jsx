import cl from './Clip.module.css'

const Clip = ({children}) => {
    return (
        <div className={cl.clip}> {children}</div>
    );
};

export default Clip;