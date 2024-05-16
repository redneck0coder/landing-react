import {useState} from "react";
import Container from "../../components/Container /Container.jsx";
import Nav from "../../components/Nav/Nav.jsx";
import Navbar from "../../components/Navbar/Navbar.jsx";
import Field from "../../components/UI/Field/Field.jsx";
import Input from "../../components/UI/Input/Input.jsx";
import useInput from "../../hooks/useInput.js";
import cl from './BlogForm.module.css'

const BlogForm = () => {

    const [tags, setTags] = useState([
        {id: 1, name: 'gamedev'},
        {id: 2, name: 'practics'},
        {id: 3, name: 'thinks'},
    ]);

    const title = useInput('');
    const body = useInput('');

    const submit = (e) => {
        e.preventDefault();
        console.log(title.value, body.value);
    }

    return (
        <>
            <Navbar/>
            <Container>
                <form action="#" className={cl.form}>
                    <Field label='Title'>
                        <Input value={title}/>
                    </Field>

                    <Field label='Body'>
                        <Input value={body} type='textarea'/>
                    </Field>

                    <Field label='Tags'>
                        <div className={cl.tags}>
                            {tags.map(tag => <div key={tag.id} className={cl.tag}>{tag.name}</div>)}
                        </div>
                    </Field>

                    <Field label='Publish' row={true}>
                        <Input type='checkbox' flexRow={true}></Input>
                    </Field>

                    <Field>
                        <button className={cl.button} onClick={submit}>Add</button>
                    </Field>
                </form>
            </Container>

        </>
    );
};

export default BlogForm;