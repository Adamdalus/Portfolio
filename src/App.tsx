import Header from "./components/Header";
import Presentacion from "./components/Presentacion";
import Proyectos from "./components/Proyectos";
import Experiencias from "./components/Experiencias";
import Formacion from "./components/Formacion";
import Perfil from "./components/Perfil";
import Contacto from "./components/Contacto";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <main>
        <Presentacion />
        <Proyectos />
        <Experiencias />
        <Formacion />
        <Perfil />
        <Contacto />
      </main>
      <Footer />
    </>
  );
}

export default App;
