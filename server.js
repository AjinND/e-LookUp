const { MongoClient, ServerApiVersion } = require("mongodb");
const express = require("express");
const bodyParser = require("body-parser");

var app = express();
app.use(bodyParser.json());
app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:4200");
  res.setHeader(
    "Access-Control-Allow-Metods",
    "GET,POST,DELETE,OPTIONS,PUT,PATCH"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With, content-type"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});

const uri =
  "mongodb+srv://admin:<password>@e-lookup-cluster.dgenj21.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

var db;
async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    db = await client.db("e-LookUp-Dev");
    console.log("Connnected to db");
  } catch (error) {
    console.log("Error occured while connecting to DB", error);
    db.close();
  }
}
// run().catch(console.dir);

app.listen(4201, () => {
  run();
});

app.get("/getUsers", (_request, response) => {
  console.log("Inside get method");
  db.collection("User")
    .find({})
    .toArray((_err, res) => {
      // console.log(res);
      response.send(res);
    });
});

app.post("/saveUser", async (request, response) => {
  console.log("Inside post method " + JSON.stringify(request.body));
  const userData = request.body;
  const result = await db.collection("User").insertOne(userData);
  response.send({
    message: "User inserted successfully",
    data: result,
  });
});
