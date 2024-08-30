"use client";

import { IVehicle } from "@/utils/api";
import { useState } from "react";
import { datesArr } from "@/utils/datesArr";
import Link from "next/link";

interface IFilterProps {
  typesArr: IVehicle[];
}

const Filter = ({ typesArr }: IFilterProps) => {
  const [year, setYear] = useState<number | null>(null);
  const [typeObj, setTypeObj] = useState<IVehicle | null>();

  const [isYearOpened, setIsYearOpened] = useState<boolean>(false);
  const [isTypeOpened, setIsTypeOpened] = useState<boolean>(false);

  const handleYearChange = (item: number) => {
    setYear(item);
    setIsYearOpened(false);
  };

  const handleTypeChange = (item: IVehicle) => {
    setTypeObj(item);
    setIsTypeOpened(false);
  };

  return (
    <div className="flex flex-row gap-4 items-center mt-4 justify-center">
      <div className="relative">
        <div
          onClick={() => setIsYearOpened((prev) => !prev)}
          className="w-48 d-flex bg-[#FFF] p-4 rounded-md border border-black cursor-pointer"
        >
          {year ?? "Choose year"}
        </div>
        <div className="absolute overflow-auto h-40 w-48">
          {datesArr &&
            isYearOpened &&
            datesArr.map((item: number) => (
              <div
                onClick={() => handleYearChange(item)}
                className="cursor-pointer p-1 bg-[#fff] hover:bg-[#F5F4F5]"
                key={item}
              >
                {item}
              </div>
            ))}
        </div>
      </div>

      <div className="relative">
        <div
          onClick={() => setIsTypeOpened((prev) => !prev)}
          className="w-48 d-flex bg-[#FFF] p-4 rounded-md border border-black cursor-pointer"
        >
          {typeObj?.MakeName ?? "Choose type"}
        </div>
        <div className="absolute overflow-auto h-40 w-48">
          {typesArr &&
            isTypeOpened &&
            typesArr.map((item: IVehicle) => (
              <div
                key={item.MakeId}
                onClick={() => handleTypeChange(item)}
                className="cursor-pointer p-1 bg-[#fff] hover:bg-[#F5F4F5]"
              >
                {item.MakeName}
              </div>
            ))}
        </div>
      </div>

      <Link href={`/result/${typeObj?.MakeId}/${year}`}>
        <button
          className="w-48 d-flex bg-[#FFF] p-4 rounded-md border border-black cursor-pointer disabled:bg-[#F5F4F5]"
          disabled={!typeObj || !year}
        >
          Next
        </button>
      </Link>
    </div>
  );
};

export default Filter;
