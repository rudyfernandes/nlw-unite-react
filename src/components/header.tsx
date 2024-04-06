import nlwIcon from '../assets/nlw-icon.svg'
import { NavLink } from './nav-link'
export function Header() {
    return (
        <div className='flex items-center gap-5 py-5'>
            <img src={nlwIcon} alt="NLW Icon"/>

            <nav className='flex items-center gap-5'>
                <NavLink href="/eventos">Eventos</NavLink>
                <NavLink href="/participantes">Participantes</NavLink>
            </nav>
        </div>
    )
}