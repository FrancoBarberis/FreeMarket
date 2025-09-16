import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import imgPedals from "../assets/Pedales.webp";
import imgMarshall from "../assets/Marshall.webp";
import imgVintage from "../assets/GuitarraVintage.webp";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true
  };

  const imagenes = [
    {
        img:imgPedals,
        alt:"guitarEffects",
        texto:"Pedales"
    },
    {
        img:imgMarshall,
        alt:"MarshallAmp",
        texto:"Amplificador"
    },
    {
        img:imgVintage,
        alt:"vintageGuitar",
        texto:"Guitarra"
    }
  ];

  return (
    <div style={{ width: "100%", margin: "0 auto" }}>
      <Slider className="carousel"  {...settings}>
        {imagenes.map((img, index) => (
          <div key={index}>
            <img
              src={img.img}
              alt={img.alt}
              style={{ width: "100%", height: "auto", maxHeight:"500px", borderRadius: "8px", objectFit:"cover" }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
