import React, { useState } from 'react';

function  RegisterForm() {
  const [email, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="grid place-items-center h-screen">
        <div className='flex-col grid p-10 border border-black rounded min-h-96'>
            <form className='flex-col grid'>
                <div className='mb-6 border-b-2 border-black'>
                    <h1 className='text-center text-2xl font-semibold'>Login</h1>
                </div>
                <div className=''>
                    <label htmlFor="email">Email</label>
                    <div>
                        <input type="text" name="email" id="email" className='border border-black rounded w-full' />
                    </div>
                </div>
                
                <div>
                    <label htmlFor="password">Password</label>
                    <div>
                        <input type="text" name="password" id="password" className='border border-black rounded w-full' />
                    </div>
                </div>

                <div>
                    <label htmlFor="password">Password</label>
                    <div>
                        <input type="text" name="password" id="password" className='border border-black rounded w-full' />
                    </div>
                </div>

                <div>
                    <label htmlFor="password">Password</label>
                    <div>
                        <input type="text" name="password" id="password" className='border border-black rounded w-full' />
                    </div>
                </div>

                <div>
                    <label htmlFor="password">Password</label>
                    <div>
                        <input type="text" name="password" id="password" className='border border-black rounded w-full' />
                    </div>
                </div>

                <input type="submit" value="Entrar" className='bg-black text-white rounded text-lg cursor-pointer my-6' />
            </form>
            <div className='flex justify-center items-center bg-gray-200 mx-[-40px] mb-[-40px] text-center'>
                <div>Já possui uma conta? <a className='bg-white font-bold p-1' href="/account/login"><u>Faça o login</u></a></div>
            </div>
        </div>
    </div>
  );
}

export default RegisterForm;