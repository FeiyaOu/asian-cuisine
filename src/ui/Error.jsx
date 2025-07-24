import { useNavigate, useRouteError } from 'react-router-dom';

function Error() {
  const navigate = useNavigate();
  const error = useRouteError();
  return (
    <div className="p-6">
      <h1>There is an error</h1>
      <p>{error.data || error.message}</p>
      <button
        onClick={() => navigate(-1)}
        className="border-2 border-green-700 px-4 text-green-700"
      >
        &larr; Go back
      </button>
    </div>
  );
}

export default Error;
