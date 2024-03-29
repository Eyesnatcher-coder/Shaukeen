import classes from "./../../styles/Home.module.css";
import { Unica_One, Quicksand, Bebas_Neue, Raleway } from "next/font/google";
import { useState } from "react";
import CarouselPage from "./Carousel";
import Link from "next/link";

const fontUnica = Unica_One({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
});
const fontBebas = Bebas_Neue({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
});
const fontRaleway = Raleway({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
});

export default function HomeGradient({
  YachtProps,
  EstateProps,
  AircraftProps,
  HomeProps,
  BikeProps,
  CarProps,
  AmphibiousProps,
  SubmarineProps,
  ATVProps,
  RVProps,
  YachtPropsFunction,
  EstatePropsFunction,
  AircraftsPropsFunction,
  HomePropsFunction,
  BikePropsFunction,
  CarPropsFunction,
  AmphibiousPropsFunction,
  SubmarinePropsFunction,
  ATVPropsFunction,
  RVPropsFunction,
}) {
  const [yacht, changeYacht] = useState(false);
  const [estate, changeEstate] = useState(false);
  const [aircrafts, changeAircrafts] = useState(false);
  const [home, changeHome] = useState(true);
  const [bike, changeBike] = useState(false);
  const [car, changeCar] = useState(false);
  const [amphibious, changeAmphibious] = useState(false);
  const [submarine, changeSubmarines] = useState(false);
  const [atv, changeATVs] = useState(false);
  const [rv, changeRVs] = useState(false);

  const yachtChangeHandler = () => {
    if (YachtProps) {
      changeYacht(false);
      changeEstate(false);
      changeAircrafts(false);
      changeHome(false);
      changeBike(false);
      changeCar(false);
      changeAmphibious(false);
      changeSubmarines(false);
      changeATVs(false);
      changeRVs(false);
      YachtPropsFunction(false);
    } else {
      changeYacht(true);
      changeEstate(false);
      changeAircrafts(false);
      changeHome(false);
      changeBike(false);
      changeCar(false);
      changeAmphibious(false);
      changeSubmarines(false);
      changeATVs(false);
      changeRVs(false);
      YachtPropsFunction(true);
      EstatePropsFunction(false);
      AircraftsPropsFunction(false);
      HomePropsFunction(false);
      BikePropsFunction(false);
      CarPropsFunction(false);
      AmphibiousPropsFunction(false);
      SubmarinePropsFunction(false);
      ATVPropsFunction(false);
      RVPropsFunction(false);
    }
  };
  const estateChangeHandler = () => {
    if (EstateProps) {
      changeYacht(false);
      changeEstate(false);
      changeAircrafts(false);
      changeHome(false);
      changeBike(false);
      changeCar(false);
      changeAmphibious(false);
      changeSubmarines(false);
      changeATVs(false);
      changeRVs(false);
      EstatePropsFunction(false);
    } else {
      changeYacht(false);
      changeEstate(true);
      changeAircrafts(false);
      changeHome(false);
      changeBike(false);
      changeCar(false);
      changeAmphibious(false);
      changeSubmarines(false);
      changeATVs(false);
      changeRVs(false);
      EstatePropsFunction(true);
      YachtPropsFunction(false);
      AircraftsPropsFunction(false);
      HomePropsFunction(false);
      BikePropsFunction(false);
      CarPropsFunction(false);
      AmphibiousPropsFunction(false);
      SubmarinePropsFunction(false);
      ATVPropsFunction(false);
      RVPropsFunction(false);
    }
  };
  const aircraftChangeHandler = () => {
    if (AircraftProps) {
      changeYacht(false);
      changeEstate(false);
      changeAircrafts(false);
      changeHome(false);
      changeBike(false);
      changeCar(false);
      changeAmphibious(false);
      changeSubmarines(false);
      changeATVs(false);
      changeRVs(false);
      AircraftsPropsFunction(false);
    } else {
      changeYacht(false);
      changeEstate(false);
      changeAircrafts(true);
      changeHome(false);
      changeBike(false);
      changeCar(false);
      changeAmphibious(false);
      changeSubmarines(false);
      changeATVs(false);
      changeRVs(false);
      AircraftsPropsFunction(true);
      YachtPropsFunction(false);
      EstatePropsFunction(false);
      HomePropsFunction(false);
      BikePropsFunction(false);
      CarPropsFunction(false);
      AmphibiousPropsFunction(false);
      SubmarinePropsFunction(false);
      ATVPropsFunction(false);
      RVPropsFunction(false);
    }
  };
  const bikeChangeHandler = () => {
    if (BikeProps) {
      changeYacht(false);
      changeEstate(false);
      changeAircrafts(false);
      changeHome(false);
      changeBike(false);
      changeCar(false);
      changeAmphibious(false);
      changeSubmarines(false);
      changeATVs(false);
      changeRVs(false);
      BikePropsFunction(false);
    } else {
      changeYacht(false);
      changeEstate(false);
      changeAircrafts(false);
      changeHome(false);
      changeBike(true);
      changeCar(false);
      changeAmphibious(false);
      changeSubmarines(false);
      changeATVs(false);
      changeRVs(false);
      BikePropsFunction(true);
      YachtPropsFunction(false);
      EstatePropsFunction(false);
      AircraftsPropsFunction(false);
      HomePropsFunction(false);
      CarPropsFunction(false);
      AmphibiousPropsFunction(false);
      SubmarinePropsFunction(false);
      ATVPropsFunction(false);
      RVPropsFunction(false);
    }
  };
  const carChangeHandler = () => {
    if (CarProps) {
      changeYacht(false);
      changeEstate(false);
      changeAircrafts(false);
      changeHome(false);
      changeBike(false);
      changeCar(false);
      changeAmphibious(false);
      changeSubmarines(false);
      changeATVs(false);
      changeRVs(false);
      CarPropsFunction(false);
    } else {
      changeYacht(false);
      changeEstate(false);
      changeAircrafts(false);
      changeHome(false);
      changeBike(false);
      changeCar(true);
      changeAmphibious(false);
      changeSubmarines(false);
      changeATVs(false);
      changeRVs(false);
      CarPropsFunction(true);
      YachtPropsFunction(false);
      EstatePropsFunction(false);
      AircraftsPropsFunction(false);
      HomePropsFunction(false);
      BikePropsFunction(false);
      AmphibiousPropsFunction(false);
      SubmarinePropsFunction(false);
      ATVPropsFunction(false);
      RVPropsFunction(false);
    }
  };
  const amphibiousChangeHandler = () => {
    if (AmphibiousProps) {
      changeYacht(false);
      changeEstate(false);
      changeAircrafts(false);
      changeHome(false);
      changeBike(false);
      changeCar(false);
      changeAmphibious(false);
      changeSubmarines(false);
      changeATVs(false);
      changeRVs(false);
      AmphibiousPropsFunction(false);
    } else {
      changeYacht(false);
      changeEstate(false);
      changeAircrafts(false);
      changeHome(false);
      changeBike(false);
      changeCar(false);
      changeAmphibious(true);
      changeSubmarines(false);
      changeATVs(false);
      changeRVs(false);
      AmphibiousPropsFunction(true);
      YachtPropsFunction(false);
      EstatePropsFunction(false);
      AircraftsPropsFunction(false);
      HomePropsFunction(false);
      BikePropsFunction(false);
      CarPropsFunction(false);
      SubmarinePropsFunction(false);
      ATVPropsFunction(false);
      RVPropsFunction(false);
    }
  };
  const submarineChangeHandler = () => {
    if (SubmarineProps) {
      changeYacht(false);
      changeEstate(false);
      changeAircrafts(false);
      changeHome(false);
      changeBike(false);
      changeCar(false);
      changeAmphibious(false);
      changeSubmarines(false);
      changeATVs(false);
      changeRVs(false);
      SubmarinePropsFunction(false);
    } else {
      changeYacht(false);
      changeEstate(false);
      changeAircrafts(false);
      changeHome(false);
      changeBike(false);
      changeCar(false);
      changeAmphibious(false);
      changeSubmarines(true);
      changeATVs(false);
      changeRVs(false);
      CarPropsFunction(false);
      YachtPropsFunction(false);
      EstatePropsFunction(false);
      AircraftsPropsFunction(false);
      HomePropsFunction(false);
      BikePropsFunction(false);
      AmphibiousPropsFunction(false);
      SubmarinePropsFunction(true);
      ATVPropsFunction(false);
      RVPropsFunction(false);
    }
  };
  const atvChangeHandler = () => {
    if (ATVProps) {
      changeYacht(false);
      changeEstate(false);
      changeAircrafts(false);
      changeHome(false);
      changeBike(false);
      changeCar(false);
      changeAmphibious(false);
      changeSubmarines(false);
      changeATVs(false);
      changeRVs(false);
      ATVPropsFunction(false);
    } else {
      changeYacht(false);
      changeEstate(false);
      changeAircrafts(false);
      changeHome(false);
      changeBike(false);
      changeCar(false);
      changeAmphibious(false);
      changeSubmarines(false);
      changeATVs(true);
      changeRVs(false);
      CarPropsFunction(false);
      YachtPropsFunction(false);
      EstatePropsFunction(false);
      AircraftsPropsFunction(false);
      HomePropsFunction(false);
      BikePropsFunction(false);
      AmphibiousPropsFunction(false);
      SubmarinePropsFunction(false);
      ATVPropsFunction(true);
      RVPropsFunction(false);
    }
  };
  const rvChangeHandler = () => {
    if (RVProps) {
      changeYacht(false);
      changeEstate(false);
      changeAircrafts(false);
      changeHome(false);
      changeBike(false);
      changeCar(false);
      changeAmphibious(false);
      changeSubmarines(false);
      changeATVs(false);
      changeRVs(false);
      RVPropsFunction(false);
    } else {
      changeYacht(false);
      changeEstate(false);
      changeAircrafts(false);
      changeHome(false);
      changeBike(false);
      changeCar(false);
      changeAmphibious(false);
      changeSubmarines(false);
      changeATVs(false);
      changeRVs(true);
      CarPropsFunction(false);
      YachtPropsFunction(false);
      EstatePropsFunction(false);
      AircraftsPropsFunction(false);
      HomePropsFunction(false);
      BikePropsFunction(false);
      AmphibiousPropsFunction(false);
      SubmarinePropsFunction(false);
      ATVPropsFunction(false);
      RVPropsFunction(true);
    }
  };

  const homeCarouselImages = [
    {
      name: "Home Carousel Image 1",
      image: "/real_estate.jpg",
    },
    {
      name: "Home Carousel Image 2",
      image: "/in_estate.jpg",
    },
    {
      name: "Home Carousel Image 3",
      image: "/in_estate_3.jpg",
    },
    {
      name: "Home Carousel Image 4",
      image: "/yacht.jpg",
    },
    {
      name: "Home Carousel Image 5",
      image: "/real_estate_2.jpg",
    },
    {
      name: "Home Carousel Image 6",
      image: "/cars_3.jpg",
    },
    {
      name: "Home Carousel Image 7",
      image: "/in_estate_2.jpg",
    },
  ];
  return (
    <>
      <CarouselPage CarouselImages={homeCarouselImages} />
      <div className={classes.overlay_main_title}>
        <h1 className={fontBebas.className}>SHAUKEENS.</h1>
        <div className={classes.carousel_search}>
          <input type="text" className={fontUnica.className} />
          <button type="submit">
            <span className="material-symbols-outlined">search</span>
          </button>
        </div>
        <div className={`${classes.line_span} ${fontRaleway.className}`}>
          <span>ONE SEARCH</span>
          <span> • </span>
          <span>200,000+ LISTINGS</span>
          <span> • </span>
          <span>7,000+ TRUSTED SELLERS</span>
          <span> • </span>
          <span>120 COUNTRIES</span>
        </div>
        <div className={classes.carousel_icon_div}>
          <div
            className={
              yacht
                ? `${classes.carousel_icons} ${classes.selected}`
                : `${classes.carousel_icons}`
            }
            onClick={yachtChangeHandler}
          >
            <span className="material-symbols-outlined">directions_boat</span>
          </div>
          <div
            className={
              estate
                ? `${classes.carousel_icons} ${classes.selected}`
                : `${classes.carousel_icons}`
            }
            onClick={estateChangeHandler}
          >
            <span className="material-symbols-outlined">villa</span>
          </div>
          <div
            className={
              aircrafts
                ? `${classes.carousel_icons} ${classes.selected}`
                : `${classes.carousel_icons}`
            }
            onClick={aircraftChangeHandler}
          >
            <span className="material-symbols-outlined">helicopter</span>
          </div>
          {/*  <div
            className={
              home
                ? `${classes.carousel_icons} ${classes.selected}`
                : `${classes.carousel_icons}`
            }
            onClick={homeChangeHandler}
          >
            <span className="material-symbols-outlined">Home</span>
          </div>*/}
          <div
            className={
              bike
                ? `${classes.carousel_icons} ${classes.selected}`
                : `${classes.carousel_icons}`
            }
            onClick={bikeChangeHandler}
          >
            <span className="material-symbols-outlined">two_wheeler</span>
          </div>
          <div
            className={
              car
                ? `${classes.carousel_icons} ${classes.selected}`
                : `${classes.carousel_icons}`
            }
            onClick={carChangeHandler}
          >
            <span className="material-symbols-outlined">directions_car</span>
          </div>
          <Link
            href="/components/ProductsList/amphibious"
            className={
              amphibious
                ? `${classes.carousel_icons} ${classes.selected}`
                : `${classes.carousel_icons}`
            }
          >
            <span className="material-symbols-outlined">local_car_wash</span>
          </Link>
          <Link
            href="/components/ProductsList/submarines"
            className={
              submarine
                ? `${classes.carousel_icons} ${classes.selected}`
                : `${classes.carousel_icons}`
            }
          >
            <span className="material-symbols-outlined">directions_boat</span>
          </Link>
          <Link
            href="/components/ProductsList/atv"
            className={
              atv
                ? `${classes.carousel_icons} ${classes.selected}`
                : `${classes.carousel_icons}`
            }
          >
            <span className="material-symbols-outlined">snowmobile</span>
          </Link>
          <Link
            href="/components/ProductsList/rv"
            className={
              rv
                ? `${classes.carousel_icons} ${classes.selected}`
                : `${classes.carousel_icons}`
            }
          >
            <span className="material-symbols-outlined">airport_shuttle</span>
          </Link>
        </div>
      </div>
    </>
  );
}
