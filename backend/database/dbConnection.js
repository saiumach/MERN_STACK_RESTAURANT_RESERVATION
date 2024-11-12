import mongoose from "mongoose";

export const dbConnection = () => {
  mongoose
    .connect(mongodb+srv://ranjithbujala:uwlaNbFKOWKghMvg@cluster0.8zpa3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0, {
      dbName: "books",
    })
    .then(() => {
      console.log("Connected to database!");
    })
    .catch((err) => {
      console.log(`Some error occured while connecing to database: ${err}`);
    });
};
