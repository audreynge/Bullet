import { NavLink } from 'react-router-dom';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'My Goals', path: '/goals' },
  { name: 'Groups', path: '/groups' },
  { name: 'Profile', path: '/profile' },
];

export default function Navbar () {
  return (
    <header className='fixed w-full px-8 border-b border-b-white/15 h-[60px] z-50 flex items-center shadow-md shadow-white/8' style={{backgroundColor: 'rgb(14, 17, 27)'}}>
      <nav className='flex justify-between items-center w-full'>
        <h1 className='text-xl font-bold'>Bullet</h1>
        <ul className='flex text-sm items-center gap-10'>
          {navLinks.map((link) => (
            <li key={link.name} className='hover:underline'>
              <NavLink to={link.path}>{link.name}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}