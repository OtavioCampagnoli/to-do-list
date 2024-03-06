class Tables {
  init(connection) {
    this.connection = connection;
    this.createTasks();
  }

  createTasks() {
    const query = `
    CREATE TABLE 
    IF NOT EXISTS tasks (
                  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
                  title VARCHAR (255) NOT NULL,
                  content TEXT,
                  status ENUM ('pending', 'in_progress', 'completed') DEFAULT 'pending',
                  deadline DATE,
                  create_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );`;

    this.connection.query(query, (error) => {
      if (error) {
        console.log("An error occurred: " + error);
        return;
      } else {
        console.log("Create Table Task!");
      }
    });
  }
}

module.exports = new Tables();
