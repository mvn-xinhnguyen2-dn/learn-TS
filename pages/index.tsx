import type { NextPage } from "next";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header/index";
import Home from "./components/features/Home/index";
import FadeIn from "./components/animations/FadeIn";
import FadeInLR from "./components/animations/FadeInLR";
import CounterNumber from "./components/animations/CounterNumber";

const HomePage: NextPage = () => {
  return (
    <>
      <Header />
      <main className="page-main">
        <Home />
        <CounterNumber />
        <FadeInLR />
        <FadeIn />
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
