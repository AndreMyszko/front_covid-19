import axios from "axios";

const instructor = "user";
const root_url = "http://localhost:8080";
const user_api_url = `${root_url}/${instructor}`;

class UserDataService {
  retriveAllUsers() {
    return axios.get(`${user_api_url}/all-users`);
  }

  retrieveUser(name, id) {
    //email, password, user_role, active,
    return axios.get(`${user_api_url}/user-id=${id}`);
  }

  deleteUser(name, id) {
    return axios.delete(`${user_api_url}/delete-user=${id}`);
  }

  updateUser(name, id, user) {
    return axios.put(`${user_api_url}/update-user=${id}`, user);
  }

  createUser(name, user) {
    return axios.post(`${user_api_url}/insert-user`, user);
  }
}

export default new UserDataService();
