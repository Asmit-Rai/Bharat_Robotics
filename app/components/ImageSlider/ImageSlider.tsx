import Carousel from "@/components/Carousel";

const ImageSlider: React.FC = () => {
  const myImages = [
    "/assets/slider_image/image1.jpg",
    "/assets/slider_image/image2.jpg",
    "/assets/slider_image/image3.jpg",
    "/assets/slider_image/image4.jpg",
    "/assets/slider_image/image5.jpg",
    "/assets/slider_image/image6.jpg",
  ];

  const myAltTexts = [
    "Description of image 1",
    "Description of image 2",
    "Description of image 3",
    "Description of image 4",
    "Description of image 5",
    "Description of image 6",
  ];

  return (
    <div className="w-full flex flex-col items-center justify-center p-6 bg-white">
      <div className="w-full max-w-6xl">
        <Carousel images={myImages} altTexts={myAltTexts} width={1200} height={600} />
      </div>
    </div>
  );
};

export default ImageSlider;
