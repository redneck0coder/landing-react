import cl from './Input.module.css'

const Input = ({value, type = 'text'}) => {

    let elementClassList = [];

    switch (type) {
        case 'text':
            elementClassList.push(cl.input);
            break
        case 'textarea':
            elementClassList.push(cl.input);
            break;
        case 'checkbox':
            elementClassList.push(cl.checkbox);
    }

    const text = <input {...value} type={type} className={elementClassList.join(' ')}/>
    const textarea = <textarea {...value} className={elementClassList.join(' ')} name="" id="" cols="30" rows="10"></textarea>

    return (
        <>{type === 'textarea' ? textarea : text}</>
    );
};

export default Input;