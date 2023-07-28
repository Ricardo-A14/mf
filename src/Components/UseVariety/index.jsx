import { useContext } from "react";
import AppContext from "../../Context/index";

import PolvoMedium from "../PolvoMedium";
import BaseLiquida from "../BaseLiquida";

const useVariety = () => {
  const { useVariety } = useContext(AppContext);

  const HandleVariety = () => {
    return (
      <div>
        {useVariety.varietyNumber === 1 && <PolvoMedium />}
        {useVariety.varietyNumber === 2 && <BaseLiquida />}
      </div>
    );
  };

  return HandleVariety();
};

export default useVariety;
