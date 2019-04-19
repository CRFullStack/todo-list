import React from "react";

export default props => (
  <ul className="ch-grid">
    {props.todoArr.map(arr => {
      if (arr.completed === false) {
        return (
          <li key={arr.id}>
            <div className="ch-item ch-img-1">
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
