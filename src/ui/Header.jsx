import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-green-700 p-4 text-lg text-white">
      <Link to="/">Asian Cuisine</Link>
    </header>
  );
}

export default Header;
