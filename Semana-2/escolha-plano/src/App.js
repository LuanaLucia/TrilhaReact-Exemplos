import './App.css';
import logo from './logo.svg'
import Cabecalho from './Cabecalho/Cabecalho';
import Card from './Card/Card';

function App() {
  return (
    <div className="App">
      <Cabecalho />
      <div id="corpo">
        <Card 
          titulo="Plano A" 
          imagem={logo} 
          valor='R$ 99,99' 
          link='https://www.google.com' 
          desc='Lorem Ipsum is simply dummy text of the printing and typesetting industry' />

        <Card 
          titulo="Plano B" 
          imagem={logo} 
          valor='R$ 199,99' 
          link='https://www.google.com'
          desc='Lorem Ipsum has been the industrys standard dummy text ever since the 1500s'/>

        <Card 
        titulo="Plano C" 
        imagem={logo} 
        valor='R$ 299,99' 
        link='https://www.google.com'
        desc='Lorem Ipsum is simply dummy text of the printing and typesetting industry'/>

      </div>
    </div>
  );
}

export default App;
