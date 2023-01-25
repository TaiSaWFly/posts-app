import httpService from "./http.service";
const usersEndPoint = "users/";

const usersService = {
  getUser: async (id) => {
    const { data } = await httpService.get(usersEndPoint + id);
    return data;
  },
};

export default usersService;
