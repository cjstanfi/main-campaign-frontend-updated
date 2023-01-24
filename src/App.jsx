import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./assets/css/landing.css";
import AppRoutes from "./AppRoutes";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useScreenFixedProvider } from "../src/components/common/context/ScreenFixedProvider";
import { useEffect } from "react";
function App() {
  const { showOverlay } = useScreenFixedProvider();
  useEffect(() => {
    if (showOverlay) {
      document.body.classList.add("setClass");
    } else {
      document.body.classList.remove("setClass");
    }
  }, [showOverlay]);
  return (
    <>
      <AppRoutes />
    </>
  );
}

export default App;
