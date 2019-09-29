import React, { Fragment } from "react";
import { connect } from "react-redux";

const App = props => {
  console.log(props.user, props.todo);
  return (
    <Fragment>
      <h1>This is my App use Connect to connect redux with react</h1>
      <h4>{props.user.name}</h4>
      <h4>{props.user.surname}</h4>
      <h4>{props.user.age}</h4>
      <button
        onClick={() =>
          props.changeUser({
            name: "warit",
            surname: "jankhong",
            age: 23
          })
        }
        type="button"
      >
        Change user
      </button>
      {props.todo.map((todo, index) => (
        <div key={index}>
          <h4>
            {todo.todo} {todo.complete}
          </h4>
        </div>
      ))}
      <button
        onClick={() =>
          props.addTodo({ todo: "another todo", complete: "false" })
        }
        type="button"
      >
        Add todo
      </button>
    </Fragment>
  );
};

const mapStateToProps = state => ({
  user: state.user,
  todo: state.Todo
});

const mapDispatchToProps = dispatch => ({
  changeUser: data => dispatch({ type: "CHANGE_USER", payload: data }),
  addTodo: data => dispatch({ type: "ADD_TODO", payload: data })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
