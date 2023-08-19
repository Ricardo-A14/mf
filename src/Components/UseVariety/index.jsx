import { useContext } from "react";
import AppContext from "../../Context/index";

import PolvoMedium from "../PolvoMedium";
import BaseLiquida from "../BaseLiquida";
import LabialCareLips from "../LabialCareLips";
import GelTint from "../GelTint";
import Pestanina from "../Pestanina";
import BestBrow from "../BestBrow";

const useVariety = () => {
  const { useVariety } = useContext(AppContext);

  const HandleVariety = () => {
    return (
      <div>
        {useVariety.varietyNumber === 1 && <PolvoMedium />}
        {useVariety.varietyNumber === 2 && <BaseLiquida />}
        {useVariety.varietyNumber === 3 && <GelTint />}
        {useVariety.varietyNumber === 4 && <LabialCareLips />}
        {useVariety.varietyNumber === 5 && <Pestanina />}
        {useVariety.varietyNumber === 6 && <BestBrow />}
      </div>
    );
  };

  return HandleVariety();
};

export default useVariety;
