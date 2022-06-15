import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
    return (
         <>  
        <div className='grid grid-row-3 content-center bg-rose-100 h-screen'>
                
                <Link to='/' className='text-center text-4xl font-extrabold '>404 Page not Found</Link>
                <img className='mx-auto p-3' src="http://www.cuentoscortos.com/imagenes/935.jpg" alt="perrito" />   
            </div>
            
       
              

        </>
    );
}

export default PageNotFound;
