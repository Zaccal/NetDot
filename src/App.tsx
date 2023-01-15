import { BrowserRouter } from 'react-router-dom'
import Header from './components/header/Header';
import RouteApp from './components/Router/RouteApp';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <RouteApp />
      </BrowserRouter>
    </>
  );
}

export default App;
