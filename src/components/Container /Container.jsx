import cl from './Container.module.css';

const Container = ({children}) => {
    return (
        <section className={cl.container}>
            {children}
        </section>
    );
};

export default Container;