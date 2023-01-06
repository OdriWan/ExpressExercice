import UserService from "../service/user.service";
import { Request, Response } from "express";

export default class UserController {
  service: UserService;

  constructor(service: UserService) {
    this.service = service;
  }

  /**
   * Retourne une tableau d'utilisateurs
   * @param req Request
   * @param res Response
   */
  getAll = async (req: Request, res: Response): Promise<void> => {
    const data = await this.service.getAll();
    res.send(data);
  };

  /**
   * Retourne l'utilisateur associé à l'id indiqué
   * @param req Request
   * @param res Response
   */
  getById = async (req: Request, res: Response): Promise<void> => {
    const id = req.params.id;
    const data = await this.service.getById(+id);
    res.send(data);
  };

  create = async (req: Request, res: Response): Promise<void> => {
    const nom = req.body.nom;
    const prenom = req.body.prenom;
    const date_de_naissance = req.body.date_de_naissance;
    const date_inscription = req.body.date_inscription;
    const nationalite = req.body.nationalite;

    const user = await this.service.create(
      nom,
      prenom,
      date_de_naissance,
      date_inscription,
      nationalite
    );
    res.send(user);
  };

  delete = async (req: Request, res: Response): Promise<void> => {
    const id = req.params.id;
    this.service
      .delete(+id)
      .then((data) => {
        res.sendStatus(200);
      })
      .catch((err) => res.send("Suppression impossible"));
  };
}
