import "./App.css";
import Navbar from "./components/common/Navbar";
import AppRoutes from "./routes/AppRoutes";
import Footer from "./components/common/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <AppRoutes />
      <Footer />
    </div>
  );
}

export default App;
