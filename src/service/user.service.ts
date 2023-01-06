import UserModel from "../model/user.model";
import UserRepository from "../repository/user.repository";

export default class UserService {
  #repo: UserRepository;

  constructor(repo: UserRepository) {
    this.#repo = repo;
  }

  getAll = (): Promise<UserModel[]> => {
    return this.#repo.getAll();
  };

  getById = (id: number): Promise<UserModel> => {
    return this.#repo.getById(id);
  };
}
