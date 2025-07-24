import { Link } from 'react-router-dom';

function CartNew() {
  return (
    <div>
      <p>This is Cart.</p>
      <Link to="/menu" className="text-green-700">
        Back to menu
      </Link>
    </div>
  );
}

export default CartNew;
