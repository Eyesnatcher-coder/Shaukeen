import { Unica_One, Quicksand, Bebas_Neue } from "next/font/google";
import ProductCard from "./ProductCards";

const play = Bebas_Neue({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
});

export default function newAndTrending() {
  return (
    <div className="menu-titles new-trending-title">
      <h1 className={play.className}>New & Trending</h1>
      <hr className="hr_rule" />
      <div>
      <ProductCard/>
      </div>
    </div>

  );
}
