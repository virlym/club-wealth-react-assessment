import './App.css';
import UserDirectory from "./pages/UserDirectory"
import {Helmet} from 'react-helmet';

function App() {
  
  return (
    <div>
      <Helmet>
        <body className="bg-dark text-light"/>
      </Helmet>
      <UserDirectory />
      <footer>
        <small> &copy; 2021 Virlym di Aunel</small>
      </footer>
    </div>
  )
}

export default App;