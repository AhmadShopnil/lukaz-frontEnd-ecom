import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import GenderCategoryList from "@/components/home/GenderCategoryList";
import JustDroppedSection from "@/components/home/JustDrop";
import ShopByCategoriesSlider from "@/components/home/ShopByCategoriesSlider";
import VideoSection from "@/components/home/VideoSection";
import Container from "@/components/shared/Container";


export default function Home() {
  return (
    <div className="">
<Container>
<ShopByCategoriesSlider/>
<VideoSection/>
      <JustDroppedSection/>
      <GenderCategoryList/>
</Container>

     
    </div>
  );
}
