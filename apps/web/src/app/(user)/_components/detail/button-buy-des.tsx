import * as React from "react";
import { Button } from "@/components/ui/button";

interface IButtonBeliDesProps {}

const ButtonBeliDes: React.FunctionComponent<IButtonBeliDesProps> = (props) => {
  const onHandleSeatReq = async () => {};
  return (
    <div>
      <Button
        className="hidden h-[36px] w-[136px] rounded-md  bg-[#53B253]  text-white md:block"
        type="button"
      >
        Beli Tiket
      </Button>
    </div>
  );
};

export default ButtonBeliDes;
