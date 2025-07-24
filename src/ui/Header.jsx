import { Link } from 'react-router-dom';
import SearchOrder from '../features/order/SearchOrder';

function Header() {
  return (
    <header className="bg-green-700 p-4 text-lg text-white">
      <Link to="/">Asian Cuisine</Link>
      <div className="text-stone-700">
        <SearchOrder />
      </div>
    </header>
  );
}

export default Header;
