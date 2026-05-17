import Slider from "../components/ui/Slider.tsx";
import Footer from "../components/Footer/Footer.tsx";
import Banner from "../components/Banner/Banner.tsx";
import Header from "../components/Header/Header.tsx";
import MobileBottomNav from "../components/Footer/sections/MobileBottomNav.tsx";
import StorySlider from "../components/StorySlider/StorySlider.tsx";
import FourImageGrid from "../components/HomePage/FourImageGrid.tsx";
import TwoImageGrid from "../components/HomePage/TwoImageGrid.tsx";
import FirstRecommendedCategories from "../components/HomePage/FirstRecommendedCategories.tsx";
import DiscountedProductSection from "../components/HomePage/DiscountedProductSection.tsx";
import TopSellingProducts from "../components/HomePage/TopSellingProducts.tsx";
import TopBrands from "../components/HomePage/TopBrands.tsx";
import QuickAccessList from "../components/HomePage/QuickAccessList.tsx";
import CategoryCarousel from "../components/HomePage/CategoryCarousel.tsx";
import AmazingDeals from "../components/HomePage/AmazingDeals.tsx";
import ReadingSection from "../components/HomePage/BlogPosts.tsx";
import SupermarketAmazingOffers from "../components/HomePage/SupermarketAmazingOffers.tsx";

const Home = () => {
  return (
      <div className="bg-[#f2f3f5] lg:bg-white flex flex-col gap-4">
          <Banner/>
          <Header/>
          <StorySlider/>
          <Slider/>
          <QuickAccessList/>
          <AmazingDeals/>
          <FourImageGrid/>
          <SupermarketAmazingOffers/>
          <FourImageGrid/>
          <CategoryCarousel/>
          <TwoImageGrid/>
          <TopBrands/>
          <FirstRecommendedCategories/>
          <TopSellingProducts/>
          <FirstRecommendedCategories/>
          <DiscountedProductSection/>
          <TopSellingProducts/>
          <ReadingSection/>
          <Footer/>
          <MobileBottomNav />
      </div>
  )
}


export default Home;