import React, { Component } from "react";
import PropTypes from "prop-types";

class TodoItem extends Component {
  getStyle = () => {
    return {
      backgroundColor: "#f4f4f4",
      textDecoration: this.props.todoItem.completed ? "line-through" : "none", //terniary object icinde vs satir ici kullanabiliyoruz if yerine
      padding: "10px",
      borderBottom: "1px #ccc dotted"
    };
  };
  complete = () => {
    //markComplete(){} seklinde yapsaydik this yeni bir scopeta tanimlanmis olacakti. TodoItemi refere etmeyecekti no longer.ve fonksiyonu cagirirken .bind(this) yapmak durumunda kalacaktik. O yuzden arrow function kullaniyoruz.
    //sadece this nasil kullaniliyo o ornek icin hala bu fonksiyon burda. State degisikleri state in oldugu componentte yapildigi icin oraya kadar props ile veri akisi saglayarak gitmemiz lazim.
  };
  render() {
    const { id, title } = this.props.todoItem;
    return (
      <div style={this.getStyle()}>
        <input
          type="checkbox"
          onChange={this.props.markComplete.bind(this, id)}
        ></input>{" "}
        <p>
          {title}
          <button style={btnStyle} onClick = {this.props.delTodo.bind(this, id)}>X</button>

        </p>
      </div>
    );
  }
}

TodoItem.propTypes = {
  todoItem: PropTypes.object.isRequired,
  markComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired,
};

const btnStyle = {
  background: "#ff0000",
  color: "#fff",
  border: "none",
  padding: "5px 9px",
  borderRadius: "50%",
  cursor: "pointer",
  float: "right"
};



export default TodoItem;
