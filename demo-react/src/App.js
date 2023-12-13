import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ListPessoaComponent from './components/ListPessoaComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreatePessoaComponent from './components/CreatePessoaComponent';
import UpdatePessoaComponent from './components/UpdatePessoaComponent';
import DeletePessoaComponent from './components/DeletePessoaComponent';

function App() {

  return (
    <div>
      <BrowserRouter>
        <HeaderComponent />
          <div className="container">
            <Routes>
              <Route path = "/" exact element = {<ListPessoaComponent />} />
              <Route path = "/pessoas" element = {<ListPessoaComponent />} />
              <Route path = "/criar-pessoa" element = {<CreatePessoaComponent />} />
              <Route path = "/update-pessoa" element = {<UpdatePessoaComponent />} />
              
              <Route path = "/delete-pessoa" element = {<DeletePessoaComponent />} />
            </Routes>
          </div>
        <FooterComponent />
      </BrowserRouter>
    </div>
  );
}
//original é <Route path = "/update-pessoa/id:"
export default App;
