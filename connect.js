const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database(
    "./collection.db",
    sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE,
    (err) => {
        if (err) {
            return console.error(err.message);
        }
        console.log("Connected to the SQlite database.");
    }
);


db.serialize(() => {
    db.run(
        `CREATE TABLE IF NOT EXISTS items (
        id INTEGER PRIMARY KEY,
        login TEXT,
        password TEXT
      )`,
        (err) => {
            if (err) {
                return console.error(err.message);
            }
            console.log("Created items table.");

            db.run(`DELETE FROM items`, (err) => {
                if (err) {
                    return console.error(err.message);
                }
                console.log("All rows deleted from items");

                const values1 = [
                    "admin",
                    "adminkey"
                ];

                const insertSql = `INSERT INTO items(login, password) VALUES(?, ?)`;

                db.run(insertSql, values1, function (err) {
                    if (err) {
                        return console.error(err.message);
                    }
                    const id = this.lastID; // get the id of the last inserted row
                    console.log(`Rows inserted, ID ${id}`);
                });

                //   Close the database connection after all insertions are done
                db.close((err) => {
                    if (err) {
                        return console.error(err.message);
                    }
                    console.log("Closed the database connection.");
                });
            });
        }
    );
});