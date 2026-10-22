
import { Header } from './components/header';
import { Footer } from './components/footer';


function App() {
  return (
    // Fragmento <> </>: agrupa varios elementos sin agregar un <div> extra
    <>
      <Header
        nombreSitio="conecta tutor"
        version="2.0"
        enlaces={[
          { texto: 'Inicio', href: '#inicio' },
          { texto: 'Menú', href: '#menu' },
          { texto: 'Contacto', href: '#contacto' },
        ]}
      />
      <Footer
        nombreSitio="conecta tutor"
        version="2.0"
        enlaces={[
          { texto: 'Inicio', href: '#inicio' },
          { texto: 'Menú', href: '#menu' },
          { texto: 'Contacto', href: '#contacto' },
        ]}
      />
    </>
  );
}

export default App;
