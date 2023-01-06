import User from "../model/user.model";
import UserRepository from "../repository/user.repository";

export default class UserService {
  #repo: UserRepository;

  constructor(repo: UserRepository) {
    this.#repo = repo;
  }

  getAll = (): Promise<User[]> => {
    return this.#repo.getAll();
  };

  getById = (id: number): Promise<User> => {
    return this.#repo.getById(id);
  };

  create = (
    nom: string,
    prenom: string,
    date_de_naissance: string,
    date_inscription: string,
    nationalite: string
  ): Promise<User> => {
    const data = new User(
      nom,
      prenom,
      date_de_naissance,
      date_inscription,
      nationalite
    );
    return this.#repo.create(data);
  };

  delete = (id: number): Promise<any> => {
    return this.#repo.delete(id);
  };
}
