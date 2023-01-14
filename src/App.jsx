import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import TopBar from "./components/TopBar";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <>
      <TopBar />
      <Header />
      <Sidebar />
    </>
  );
}

export default App;
