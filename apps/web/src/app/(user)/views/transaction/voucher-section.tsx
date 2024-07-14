import * as React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FaTicketAlt } from "react-icons/fa";
interface IVoucherSectionProps {}

const VoucherSection: React.FunctionComponent<IVoucherSectionProps> = (
  props,
) => {
  return (
    <section className=" mx-[10px] md:mx-0">
      <div className="ml-0 mt-[20px] h-auto w-full rounded-lg  bg-white shadow md:ml-[120px] md:h-auto md:w-[828px] md:px-[28px] md:py-[28px]">
        <div className="  flex justify-between">
          <Select>
            <SelectTrigger className="w-full md:w-[1000px]">
              <div className=" flex space-x-4">
                <FaTicketAlt className="h-[20px] w-[20px] text-[#aeb2be] md:h-[24px] md:w-[24px]" />
                <p className=" text-[12px] text-gray-500">Pakai Voucher</p>
              </div>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="20persen">Voucher 20%</SelectItem>
                <SelectItem value="21persen">Voucher 20%</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
    </section>
  );
};
