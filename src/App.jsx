// Import Swiper styles
import "swiper/css";
import Header from "./components/Header";
import OVERONS from "./components/OVERONS";
import Footer from "./components/Footer";

const App = () => {
  return (
    <main className="mx-auto">
      <Header />
      <OVERONS />
      <Footer />
    </main>
  );
};

export default App;
