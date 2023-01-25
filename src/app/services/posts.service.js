import httpService from "./http.service";
const postsEndPoint = "posts/";

const postsService = {
  getList: async () => {
    const { data } = await httpService.get(postsEndPoint);
    return data;
  },
  getPost: async (id) => {
    const { data } = await httpService.get(postsEndPoint + id);
    return data;
  },
  createPost: async (payload) => {
    const { data } = await httpService.post(postsEndPoint, payload);
    return data;
  },
};

export default postsService;
