import { Link } from 'react-router-dom'
import useAuth from '../hooks/useAuth';
import usePacientes from '../hooks/usePacientes';

const Header = () => {

    const { setPacientes } = usePacientes()

    const { cerrarSesion } = useAuth()
    return (
        <header className="py-10 bg-indigo-600">
            <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center">
                <h1 className="font-bold text-2xl text-indigo-200 text-center">
                    Administrador de Pacientes de {''}
                    <span className="text-white font-black">Veterinaria</span>
                </h1>

                <nav className='flex flex-col items-center lg:flex-row gap-4 mt-5 lg:mt-0'>
                    <Link to="/admin" className='text-white text-sm uppercase font-bold'>Pacientes</Link>
                    <Link to="/admin/perfil" className='text-white text-sm uppercase font-bold'>Perfil</Link>

                    <button
                        type="button"
                        className='text-white text-sm uppercase font-bold'
                        onClick={() => {
                            cerrarSesion()
                            setPacientes([])
                        }}
                    >Cerrar Sesión</button>
                </nav>
            </div>

        </header>
    )
};

export default Header;
