import React, { useState } from "react";
import { connect } from "react-redux";
import { actionCreators } from "../store";

import ToDo from "../components/Todo";

function Home({toDos, addTodo}) {
    const [text, setText] = useState("");

    const onChange = (e) => {
        setText(e.target.value);
        // console.log(text)
    }

    const onSubmit = (e) => {
        e.preventDefault();
        // console.log(text);
        addTodo(text);
        setText("");
    }

    return (
        <>
            <h1>To Do</h1>
            <form onSubmit={ onSubmit }>
                <input type="text" value={ text } onChange={ onChange }/>
                <button>ADD</button>
            </form>
            <ul>
                {toDos.map(toDo => <ToDo key={toDo.id} {...toDo} />)}
            </ul>
        </>
    );
}

const mapStateToProps = (state) =>  {
    return { toDos: state }

}
const mapDispatchToProps = (dispatch) =>  {
    return { 
        addTodo: (text) => dispatch(actionCreators.addTodo(text))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);