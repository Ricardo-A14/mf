import { useContext } from "react";
import AppContext from "../../Context/index";

import PolvoMedium from "../PolvoMedium";
import BaseLiquida from "../BaseLiquida";
import LabialCareLips from "../LabialCareLips";
import GelTint from "../GelTint";

const useVariety = () => {
  const { useVariety } = useContext(AppContext);

  const HandleVariety = () => {
    return (
      <div>
        {useVariety.varietyNumber === 1 && <PolvoMedium />}
        {useVariety.varietyNumber === 2 && <BaseLiquida />}
        {useVariety.varietyNumber === 3 && <GelTint />}
        {useVariety.varietyNumber === 4 && <LabialCareLips />}
      </div>
    );
  };

  return HandleVariety();
};

export default useVariety;
