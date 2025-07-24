import { useLoaderData } from 'react-router-dom';
import MenuItem from './MenuItem';

const API_URL = 'https://react-fast-pizza-api.onrender.com/api';

function Menu() {
  const menu = useLoaderData();
  console.log(menu);

  return (
    <div className="flex flex-col items-center">
      <p>This is menu.</p>
      <ul>
        {menu.map((pizza) => (
          <MenuItem key={pizza.id} pizza={pizza} />
        ))}
      </ul>
    </div>
  );
}

export async function loader() {
  const res = await fetch(`${API_URL}/menu`);
  if (!res.ok) throw Error('data can not be fetched');

  const { data } = await res.json();
  return data;
}

export default Menu;
