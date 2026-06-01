import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import HotMenu from "./Components/HotMenu/HotMenu";
import Banner from "./Components/Banner/Banner";
import PopularRecipe from "./Components/PopularRecipe/PopularRecipe";
import Testimonal from "./Components/Testimonal/Testimonal";
import Footer from "./Components/Footer/Footer";
const App = () => {
  return (
    <div className="overflow-x-hidden bg-white2 text-dark">
      <Navbar/>
      <Hero/>
      <HotMenu/>
      <Banner/>
      <PopularRecipe/>
      <Testimonal/>
      <Footer/>
    </div>
  )
}
export default App;