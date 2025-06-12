import { ApplicationRoutes } from './ApplicationRoutes';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
function App() {
  return (
    <>
      <main className='flex-grow-1'>
        <Header />
        <ApplicationRoutes />
      </main>
      <Footer />
    </>
  );
}

export default App;
