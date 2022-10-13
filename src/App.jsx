// CSS FILES
import { Footer, Navbar, Sidebar } from "./components";
import "./styles/globalStyles.css";
import "./styles/font.css";

// PAGES

const App = () => {
  return (
    <>
      <h1 className="container">APP</h1>
      <Navbar />
      <Sidebar />
      <Footer />
    </>
  );
};

export default App;
