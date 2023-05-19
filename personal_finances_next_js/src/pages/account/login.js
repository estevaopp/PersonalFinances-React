import React, { useState } from 'react';

function  LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const LoginApi = async (e) => {
    // 👇 Send a fetch request to Backend API.
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5281/api/Account/Login", {
        method: "POST",
        body: JSON.stringify({
          email,
          password
        }),
        headers: {
          "content-type": "application/json",
        },
      });

      const data = await res.json();
			console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-between">
    <main className="flex-grow max-w-screen-md mx-auto my-8">
    <form className="bg-white p-6 rounded-lg shadow-md">
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
          Email
        </label>
        <input
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="email"
          type="text"
          placeholder="Nome de usuário"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="password">
          Senha
        </label>
        <input
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="password"
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={LoginApi}>
        Entrar
      </button>
    </form>
    </main>
    </div>
  );
}

export default LoginForm;