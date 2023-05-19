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
    <div className="grid place-items-center h-screen">
        <div className='flex-col grid p-10 border border-black rounded h-96'>
            <form className='flex-col grid'>
                <div className='mb-6 border-b-2 border-black'>
                    <h1 className='text-center text-2xl font-semibold'>Login</h1>
                </div>
                <div className=''>
                    <label htmlFor="email">Email</label>
                    <div>
                        <input type="text" name="email" id="email" className='border border-black rounded w-full' 
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                </div>
                
                <div>
                    <label htmlFor="password">Password</label>
                    <div>
                        <input type="text" name="password" id="password" className='border border-black rounded w-full' 
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                </div>
                <input type="submit" value="Entrar" className='bg-black text-white rounded text-lg cursor-pointer my-6' onClick={LoginApi} />
            </form>
            <div className='flex justify-center items-center bg-gray-200 mx-[-40px] mb-[-40px] text-center'>
                <div>Ainda não tem conta? <a className='bg-white font-bold p-1' href="/account/register"><u>Registre-se</u></a></div>
            </div>
        </div>
    </div>
  );
}

export default LoginForm;