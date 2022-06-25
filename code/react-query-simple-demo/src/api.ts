import axios from "axios";

export const getRepoInfo = (repoId: number) =>
  axios.get(`https://api.github.com/repositories/${repoId}`);

export const postRepoInfo = (data: any) =>
  axios.post(`https://api.github.com/users/TanStack/followers`, data);
