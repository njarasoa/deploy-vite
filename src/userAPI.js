import axios from "axios";

const userAPI = {
    fetchAll: (limit) => {
        const suffixe = (limit !== undefined) ? "?_limit="+limit : "";
        return axios.get("https://jsonplaceholder.typicode.com/users"+suffixe).then(res => res);
    }
}

export default userAPI;