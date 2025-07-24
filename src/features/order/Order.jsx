import { useLoaderData } from 'react-router-dom';

const API_URL = 'https://react-fast-pizza-api.onrender.com/api';

function Order() {
  const res = useLoaderData();
  const order = res.data;
  console.log(order);
  const { id, status, customer, orderPrice, estimateDelivery } = order;

  return (
    <div className="p-4">
      <p>
        {id},{status},{customer}
      </p>
    </div>
  );
}

export async function loader({ params }) {
  const res = await fetch(`${API_URL}/order/${params.orderId}`);
  if (!res) throw new Error('no data found');
  const data = await res.json();
  return data;
}

export default Order;
