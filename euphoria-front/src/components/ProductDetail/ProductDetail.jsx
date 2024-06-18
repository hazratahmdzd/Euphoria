import PdBottomContainer from "./PdBottomContainer/PdBottomContainer";
import PdMiddleContainer from "./PdMiddleContainer/PdMiddleContainer";
import PdUpContainer from "./PdUpContainer/PdUpContainer";

const ProductDetail = () => {

  return (
    <div className="pdContainer">
      <PdUpContainer />
      <PdMiddleContainer />
      <PdBottomContainer />
    </div>
  );
};

export default ProductDetail;

//* SLICK-SLIDER-IN ARROW ICON-LARINI NECE STYLE ETMEK?
//* SLICK-SLIDER-IN ÖLÇÜSÜNÜ BÖYÜTMƏK NECƏ?
//* price-in 00-lari gorunmur
//* pdContaineri nece style edim import edilmir