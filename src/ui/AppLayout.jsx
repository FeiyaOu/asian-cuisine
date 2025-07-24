import { Link, Outlet, useNavigate, useNavigation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Loader from './Loader';

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === 'loading';

  return (
    <>
      {isLoading ? (
        <div className="flex items-center justify-center">
          <Loader />
        </div>
      ) : (
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-grow">
            <Outlet />
          </main>
          <Footer />
        </div>
      )}
    </>
  );
}

export default AppLayout;
