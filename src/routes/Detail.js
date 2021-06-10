import React from "react";
// import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { actionCreators } from "../store";
import { Link } from "react-router-dom";

function Detail({ toDo, onDbtnClick }) {
    // const id = useParams();
    // console.log(id)
    
    // console.log(toDo.id)
    
    return (
        <>
        { toDo ? 
            <>
                <h1>{toDo?.text}</h1>
                <h5>Created at: {toDo?.id}</h5>
                <button onClick={ onDbtnClick }>DEL</button>
            </>
        :   <>
                <h3>This was deleted</h3>
                <Link to='/'>
                    <button>BACK</button>
                </Link>
            </>
        }  
        </>
    )
}

const mapStateToProps = (state, ownProps) => {
    // console.log(ownProps)
    const { match: {params: {id}} } = ownProps;
    // console.log(id)
    return { toDo: state.find(toDo => toDo.id === parseInt(id)) }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    // console.log(ownProps.match.params.id)
    return {
        onDbtnClick: () => dispatch(actionCreators.deleteTodo(ownProps.match.params.id))
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(Detail);