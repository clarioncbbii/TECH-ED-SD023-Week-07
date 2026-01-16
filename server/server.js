//TODO: Set up a server API

// imports
import express from "express";
import cors from "cors";
import { db } from "./dbConnection.js";

// initialise express
const app = express();

// use JSON in our server
app.use(express.json());

// config cors
app.use(cors());

// port setup
const PORT = 8080;

app.listen(PORT, () => {
  console.info(`Server API is live on ${PORT}!`);
});

// ===================

//TODO: Set up a routing system with at least one GET route and one POST route
//remember to store your secrets in the .env file

//* ROOT route
// route --> http method GET b/c we want to READ data

app.get("/", (req, res) => {
  res.json({ message: "Hawaiyu - welcome to the server API!" });
});

//* GET ROUTE
// READ recipes data
// static route --> http method GET
// use POSTMAN to test this route is working properly

app.get("/all-recipes", async (req, res) => {
  try {
    //query db
    const query = await db.query(
      `SELECT id, recipe_name, ingredients, recipe_time, method, image_link FROM recipes;`
    );
    console.log(query.rows);
    res.json(query.rows);
  } catch (error) {
    console.error(error, "Response failed. Try turning it off and on again.");
    res.status(500).json({ response: "failed" });
  }
});

// dynamic route (which wiill be nested in the static route above)
app.get("/all-recipes/:id", async (req, res) => {
  try {
    //access the value of my id params
    const { id } = req.params;
    //query db
    const query = await db.query(
      `SELECT recipe_name, ingredients, recipe_time, method, image_link FROM recipes WHERE id = $1`,
      [id]
    );
    console.log(query.rows);
    res.json(query.rows);
  } catch (error) {
    console.error(error, "Response failed. Try turning it off and on again.");
    res.status(500).json({ response: "failed" });
  }
});

//* POST ROUTE
// CREATE new recipes data
// route --> http method POST
// static route

app.post("/add-recipe", (req, res) => {
  try {
    //collect the data to insert
    const { recipe_name, ingredients, recipe_time, method, image_link } =
      req.body;
    //query the database to insert new data
    const query = db.query(
      `INSERT INTO recipes (recipe_name, ingredients, recipe_time, method, image_link) VALUES ($1, $2, $3,$4, $5) RETURNING *`,
      [recipe_name, ingredients, recipe_time, method, image_link]
    );
    console.log(query.rows);
    res.status(200).json({ request: "success" });
  } catch (error) {
    console.error(error, "Request failed. Turn off and on");
    res.status(500).json({ request: "fail" });
  }
});
