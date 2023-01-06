import axios from "axios";
import "dotenv/config";
import User from "../model/user.model";

export default class UserRepository {
  #URL = process.env.JSONSERVER;

  getAll = async (): Promise<User[]> => {
    return axios.get(`${this.#URL}`).then((res) => res.data);
  };

  getById = async (id: number): Promise<User> => {
    return axios.get(`${this.#URL}/${id}`).then((res) => res.data);
  };
}
