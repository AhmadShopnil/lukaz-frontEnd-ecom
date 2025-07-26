import RoundOnHoverCard from "@/components/Cards/RoundOnHoverCard";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import FeaturedCategoriesList from "@/components/home/FeaturedCategoriesList";
import GenderCategoryList from "@/components/home/GenderCategoryList";
import JustDroppedSection from "@/components/home/JustDrop";
import ProductSlider from "@/components/home/ProductSlider";
import RatingSlider from "@/components/home/RatingSlider";
import ShopByCategoriesSlider from "@/components/home/ShopByCategoriesSlider";
import TopBanner from "@/components/home/TopBanner";
import VideoSection from "@/components/home/VideoSection";
import Container from "@/components/shared/Container";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";


export default function Home() {
  return (
    <div className="">

      <TopBanner/>
       <VideoSection/>
      <Container>
        
        <ProductSlider/>
      <ShopByCategoriesSlider/>
       
      <JustDroppedSection/>
     
      <GenderCategoryList/>
      {/* <FeaturedCategoriesList/> */}
      {/* <RoundOnHoverCard/> */}
      <RatingSlider/>
      </Container>

     
    </div>
  );
}
