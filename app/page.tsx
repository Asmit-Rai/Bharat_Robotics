import Banner from "./components/Banner/Banner";
import Mentor from "./components/Mentor/Mentor";
import Newsletter from "./components/Newsletter/Newsletter";
import Students from "./components/Students/Students";
import Tabs from './components/Courses/Courses'
import ImageSlider from "./components/ImageSlider/ImageSlider";

export default function Home() {
  return (
    <main>
        <Banner />
        <Tabs />
        <ImageSlider/>
        <Mentor />
        <Students />
        <Newsletter />
    </main>
  )
}
