const connection = require("../infrastructure/connection");
class TaskModel {
  list() {
    const query = `SELECT * FROM 
                                tasks `;

    return new Promise(function (resolve, reject) {
      connection.query(query, {}, (error, response) => {
        if (error) {
          console.log(`Error: ${error}`);
          reject(error);
        } else {
          console.log("Success to list");
          resolve(response);
        }
      });
    });
  }

  add(newTask) {
    console.log(newTask);
    let title, content;
    title = newTask.title;
    content = newTask.content;

    const query = `INSERT INTO tasks (title, content) 
                      VALUES (${title}, ${content}); `;

    return new Promise(function (resolve, reject) {
      connection.query(query, {}, (error, response) => {
        if (error) {
          console.log(`Error: ${error}`);
          reject(error);
        } else {
          console.log("New Task add with success");
          resolve(response);
        }
      });
    });
  }

  update(id, newTask) {
    let title, content, status, deadline;
    title = newTask.title;
    content = newTask.content;
    status = newTask.status;
    deadline = newTask.deadline;

    const query = "UPDATE tasks SET";

    if (title != undefined && title != null) {
      query += `title = ${title}`;
    }
    if (content != undefined && content != null) {
      query += `,content = ${content}`;
    }
    if (status != undefined && status != null) {
      query += `, status = ${status}`;
    }
    if (deadline != undefined && deadline != null) {
      query += `, deadline = ${deadline}`;
    }

    query += ` Where id = ${id};`;

    return new Promise(function (resolve, reject) {
      connection.query(query, {}, (error, response) => {
        if (error) {
          console.log(`Error: ${error}`);
          reject(error);
        } else {
          console.log(`Task ${id} update with success!`);
          resolve(response);
        }
      });
    });
  }

  delete(id) {
    const query = `DELETE FROM tasks WHERE id = ${id};`;
    return new Promise(function (resolve, reject) {
      connection.query(query, (error, response) => {
        if (error) {
          console.log(`Error: ${error}`);
          reject(error);
        } else {
          console.log(`Task ${id} deleted with success!`);
          resolve(response);
        }
      });
    });
  }
}

module.exports = new TaskModel();