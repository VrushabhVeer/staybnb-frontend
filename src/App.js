import "./App.css";
import Footer from "./components/common/Footer";
import Navbar from "./components/common/Navbar";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <div>
      <Navbar />
      <AppRoutes />
      <Footer />
    </div>
  );
}

export default App;
