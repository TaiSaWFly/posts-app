import { makeAutoObservable } from "mobx";
import usersService from "../services/users.service";
import { findIndex } from "../utils/findIndex";

class UsersStore {
  users = [];

  constructor() {
    makeAutoObservable(this);
  }

  async loadUser(id) {
    const index = findIndex(this.users, id);

    if (index === -1) {
      try {
        const data = await usersService.getUser(id);
        const indexUserStore = findIndex(this.users, data.id);

        if (indexUserStore === -1) {
          this.users = [...this.users, data];
        }
      } catch (error) {
        console.log(error);
      }
    }
  }

  getUsers(id) {
    const user = this.users.find((u) => u.id === id);
    if (user) return user;

    this.loadUser(id);

    return user;
  }
}

export default new UsersStore();
