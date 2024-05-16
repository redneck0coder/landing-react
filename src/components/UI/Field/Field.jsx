import cl from './Field.module.css'

const Field = ({label = '', row = false, children}) => {

    const classList = [];

    row ? classList.push(cl.fieldRow) : classList.push(cl.field)

    return (
        <div className={classList.join(' ')}>
            {label && <label className={cl.label}>{label}</label>}
            {children}
        </div>
    );
};

export default Field;