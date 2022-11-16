import app from "./server";

const PORT = 8080;

app.listen(PORT, () => {
  console.log("Server is listening on Port " + PORT + "...");
});
