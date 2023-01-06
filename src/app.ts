import express from "express";
import "dotenv/config";
import router from "./router/user.router";

//Instance de express
const app = express();

//Parse le json
app.use(express.json());

//Utilisateur d'une variable d'environnement
const port = process.env.PORT;

//Instance du routeur express ayant comme route par défaut user
app.use("/user", router);

//Ecoute du port serveur associé à la variable d'environnement
app.listen(port, () => {
  console.log(`serveur lancé sur le port ${port}`);
});
