"use client";

import { getVehicleTypes, IVehicle } from "@/utils/api";
import DropdownSelector from "../DropdownSelector/DropdownWrapper";
import { useState } from "react";
import { datesArr } from "@/utils/datesArr";

const Filter = () => {
  const typesArr = [];

  const [isSelectorOpened, setIsSelectorOpened] = useState<boolean>(false);

  return (
    <div className="">
      {/* <DropdownSelector /> */}
      <div className="relative">
        <div className="d-flex bg-[#FFF] p-4 rounded-md border-">
          Value
        </div>
        {datesArr &&
          true &&
          datesArr.map((item: number) => (
            <div className="p-1 bg-[blue]" key={item}>
              {item}
            </div>
          ))}
        {/* {typesArr &&
          isSelectorOpened &&
          typesArr.map(
            ({
              MakeId,
              MakeName,
              VehicleTypeId,
              VehicleTypeName,
            }: IVehicle) => (
              <div className="" key={MakeId}>
                {MakeName}
              </div>
            )
          )} */}
      </div>
    </div>
  );
};

export default Filter;
