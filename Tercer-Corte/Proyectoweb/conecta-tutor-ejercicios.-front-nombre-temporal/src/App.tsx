
import { Header } from './components/header';
import { Footer } from './components/footer';


function App() {
  return (
    <div className="app">
      <Header
        nombreSitio="conecta tutor"
        version="2.0"
        enlaces={[
          { texto: 'Inicio', href: '#inicio' },
          { texto: 'Menú', href: '#menu' },
          { texto: 'Contacto', href: '#contacto' },
        ]}
      />
      <main className="app__contenido" />
      <Footer
        nombreSitio="conecta tutor"
        version="2.0"
        enlaces={[
          { texto: 'Inicio', href: '#gracias' },
          { texto: 'Menú', href: '#por' },
          { texto: 'Contacto', href: '#visitarnos' },
        ]}
      />
    </div>
  );
}

export default App;
