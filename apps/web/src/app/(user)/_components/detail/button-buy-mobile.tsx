import * as React from "react";
import { Button } from "@/components/ui/button";

interface IButtonBeliMobileProps {}

const ButtonBeliMobile: React.FunctionComponent<IButtonBeliMobileProps> = (
  props,
) => {
  return (
    <div>
      <Button
        className="block h-[40px] w-full rounded-md  bg-[#53B253]  text-white md:hidden"
        type="button"
      >
        Beli Tiket
      </Button>
    </div>
  );
};

export default ButtonBeliMobile;
