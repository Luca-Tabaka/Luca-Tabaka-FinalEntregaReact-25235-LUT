import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import { AuthProvider } from "./context/AuthContext";
import Header from "./components/layout/menu/Header";
import Footer from "./components/layout/Footer";
import { CarritoProvider } from "./context/CarritoContext";
import './styles/general.css' 

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <CarritoProvider>
          <Header />     
          <AppRoutes /> 
          <Footer />     
        </CarritoProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
