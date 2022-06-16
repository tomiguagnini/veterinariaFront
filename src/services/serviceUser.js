import axios from "axios";


const URL = process.env.REACT_APP_API_URL;

const login = (email, password , setError) => {
    return axios({
    method: "POST",
    url: URL + "/api/login",
    data: { email, password },
    })
    .then(res =>res)
    .catch((error)=> {
        console.log(error);
        setError(error.response.data);
    });
};

const register = (name,lastname,password,email,phone,setError) => {
    return axios({
        method: 'POST',
        url: URL + "/api/register",
        data: {
            name: name,
            lastname: lastname,
            email: email,
            password: password,
            token: '',
            phone: phone,
        },
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then(response => response)
        .catch(err => setError(err.response.data))
}

export default {login, register};
