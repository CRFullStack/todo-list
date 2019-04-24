import axios from "axios";
const API_URL = "http://localhost:5000";

export function addTask(task) {
  return {
    type: "ADD_TASK",
    payload: task
  };
}

export function markTaskCompleted(id) {
  return function(dispatch) {
    {
      console.log(`actions id: ${id}`);
    }
    axios
      .post(`${API_URL}/post/completed-task`, id)
      .then(response => {
        console.log(`posted data, response: ${response}`);
        dispatch({
          type: "MARKTASKCOMPLETED_ACTION",
          payload: response.data
        });
      })
      .catch(error => {
        console.log(error);
      });
  };
}

export function submitTask(dataFromStore) {
  console.log(dataFromStore);
  return function(dispatch) {
    axios
      .post(`${API_URL}/post/create-task`, dataFromStore)
      .then(response => {
        dispatch({
          type: "GET_TASK_ACTION",
          payload: response.data
        });
      })
      .then(() => {
        dispatch({
          type: "REST_ACTION",
          payload: ""
        });
      })

      .catch(error => {
        console.log(error);
      });
  };
}

export function deleteTask(id) {
  console.log(`actions: ${id}`);
  console.log(`actions prop: ${id.taskId}`);
  return function(dispatch) {
    axios({
      method: "delete",
      url: `${API_URL}/delete/delete-task`,
      data: id,
      params: {
        force: true
      }
    })
      .then(res => {
        dispatch({
          type: "DELETE_ACTION",
          payload: res.data
        });
      })
      .catch(error => {
        console.log(error);
      });
  };
}

export function testAction(e) {
  return function(dispatch) {
    e.preventDefault();
    axios
      .get(`${API_URL}`)
      .then(response => {
        dispatch({
          type: "TEST_ACTION",
          payload: response.data
        });
      })
      .catch(error => {
        console.log(error);
      });
  };
}

export function getTaskAction() {
  return function(dispatch) {
    axios
      .get(`${API_URL}/get/all-task`)
      .then(response => {
        dispatch({
          type: "GET_TASK_ACTION",
          payload: response.data
        });
      })
      .catch(error => {
        console.log(error);
      });
  };
}
