import React from "react";

export default props => (
  <ul className="ch-grid">
    {console.log(props.todoArr)}
    {props.todoArr.map(arr => {
      if (arr.completed === false) {
        return (
          <li key={arr._id}>
            <div className="ch-item ch-img-1" id={arr._id}>
              <h4>{arr.task}</h4>
              <div className="ch-info">
                <p>
                  <i className="fas fa-check" />
                  <i className="fas fa-times" />
                  <i className="far fa-edit" />
                </p>
              </div>
            </div>
          </li>
        );
      }
    })}
  </ul>
);
