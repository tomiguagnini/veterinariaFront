import React from 'react';
import { Link } from 'react-router-dom';


const Home = () => {
    return (
        <div>
            <nav>
                <div className='flex flex-row justify-between md:justify-end items-center'>
                    <Link className='p-1 bg-rose-500 hover:bg-rose-400 text-white rounded-md m-3'
                    to='/login'>
                        Iniciar Sesion
                    </Link>
                    <Link className='p-1 bg-rose-500 hover:bg-rose-400 text-white rounded-md m-3 '
                    to="/register">
                        Registrarse
                    </Link>
                </div>
                
            </nav>
            <div className='h-96 flex flex-col justify-center items-center'>
                <h1 className='text-6xl font-extra-bold text-center text-slate-900 '>Veterinaria</h1>
               
            </div>

        </div>
    );
}

export default Home;
