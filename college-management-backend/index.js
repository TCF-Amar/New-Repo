const express = require("express");
const mySql = require("mysql");
const app = express();
const port = 5000;
const cors =require('cors') 
app.use(cors())

// MySQL कनेक्शन सेटअप
const conn = mySql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "mydatabase",
});

// डेटाबेस कनेक्ट करें
conn.connect((err) => {
  if (err) {
    console.error("Connection failed:", err);
    return;
  }
  console.log("Connected to the database successfully");
});

// API रूट: /api/student
app.get("/api/students", (req, res) => {
  conn.query(
    "SELECT COUNT(*) as totalStudents FROM students",
    (err, result) => {
      if (err) {
        console.error("Error fetching total students:", err);
        return res.status(500).json({ error: "Database error" });
      }

      // `totalStudents` को कंसोल में लॉग करें
      const totalStudents = result[0].totalStudents;
      console.log("Total Students:", totalStudents);

      res.json({ totalStudents });
    }
  );
});

// सर्वर को सुनना
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
