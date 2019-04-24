import React from "react";

export default props => (
  <ul className="ch-grid">
    {props.todoArr.map(arr => {
      if (arr.completed === true) {
        return (
          <li key={arr.id}>
            <div className="ch-item ch-img-1">
              <h4>{arr.task}</h4>
              <div className="ch-info">
                <p>
                  <i
                    className="fas fa-times"
                    onClick={() => {
                      props.addTaskObj.taskId = arr._id;
                      props.deleteTask(props.addTaskObj);
                    }}
                  />
                </p>
              </div>
            </div>
          </li>
        );
      }
    })}
  </ul>
);
