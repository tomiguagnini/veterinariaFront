import { useState } from "react"
import axios from 'axios'
import { useEffect } from "react";
import {useNavigate, Link} from "react-router-dom"

const URL = process.env.REACT_APP_API_URL;


export default function Login() {
  const [email, setEmail] = useState({ value: '', validate: false })
  const [password, setPassword] = useState({ value: '', validate: false })
  const [response, setResponse] = useState('')
  const location = useNavigate()

  const OnChange = (e) => {
    setEmail({ value: e.target.value })
  }
  const OnChangePassword = (e) => {
    setPassword({ value: e.target.value })
  }


  useEffect(() => {
    const user = window.localStorage.getItem('USER')
    if(user){
      location('/dashboard')
    }
  }, []);


  const sendCredentials = (e) => {
    e.preventDefault()
    axios({
      method: 'post',
      url: URL + "/api/login",
      data: {
        email: email.value,
        password: password.value,
      }
    })
    .then(function (response) {
      if (response.status === 200) {
        const user = {
          email: response.data.email,
          id: response.data.id,
          token: response.data.token,
        }
        window.localStorage.setItem("USER", JSON.stringify(user))
        location('/dashboard')
        
      }
      console.log(response.data);
    })
    .catch(function (error) {
      console.log(error);
      setResponse(error.response.data)
    });
  }




  return (
    <>
      <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h2 className="m-2 text-center text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
          </div>
          <form className="mt-8 bg-slate-300 p-6 rounded space-y-6" onSubmit={sendCredentials}>
            
            {response ?
             <label className="text-white text-sm text-center bg-red-600 p-2 rounded-md block ">{response.msg}</label> 
             : ''}

            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-rose-500 focus:border-rose-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                  value={email.value}
                  onChange={OnChange}
                />
              </div>

              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-rose-500 focus:border-rose-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                  value={password.value}
                  onChange={OnChangePassword}
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center text-sm">
                <Link to="/register" className="font-medium text-rose-400 hover:text-rose-300">
                  Create new account
                </Link>

              </div>

              <div className="text-sm">
                <p className="font-medium text-rose-400 hover:text-rose-300">
                  Forgot your password?
                </p>
              </div>
            </div>

            <div>
              <button
                type="sumbit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-rose-700 hover:bg-rose-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">

                </span>
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

