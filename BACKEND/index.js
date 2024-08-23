import express from "express";
import { join } from "path";

import { open } from "sqlite";
import  pkg  from "sqlite3";

const { Database } = pkg

const app = express();
app.use(express.json())

const dbPath = join("sampleDatabase.db");

let db = null;

const initializeDBAndServer = async () => {
  try {
    db = await open({
      filename: dbPath,
      driver: Database,
    });
    app.listen(3000, () => {
      console.log("Server Running at http://localhost:3000/");
    });
  } catch (e) {
    console.log(`DB Error: ${e.message}`);
    process.exit(1);
  }
};

initializeDBAndServer();



app.get("/mentors/", async (request, response) => {
  const getBooksQuery = `
    SELECT
      *
    FROM
      mentors
   
    ORDER BY
      id;
      
      `;
  const booksArray = await db.all(getBooksQuery);
  response.send(booksArray);
});


app.get("/bookings/", async (request, response) => {
  const getBookinsQuery = `
    SELECT
      *
    FROM
      bookings
   
    ORDER BY
      id;
      
      `;
  const bookingsArray = await db.all(getBookinsQuery);
  response.send(bookingsArray);
});



app.post("/booking/", async (request, response) => {
  const bookDetails = request.body;
  const {
    studentName,
    mentorName,
    area_of_interest,
    duration
  } = bookDetails;
  const addBookQuery = `
    INSERT INTO
      book (studentName, mentorName, area_of_interest, duration)
    VALUES
      (
        '${studentName}',
         '${mentorName}',
         '${area_of_interest}',
         ${duration},
         
      );`;

  const dbResponse = await db.run(addBookQuery);
  const bookId = dbResponse.lastID;
  response.send({ bookId: bookId });
});


app.get("/",(req, res) =>{
  res.send("server is ready...")
})
app.get("/api/user",(req, res) =>{
  res.send(users)
})

export default app