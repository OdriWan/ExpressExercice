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
}
