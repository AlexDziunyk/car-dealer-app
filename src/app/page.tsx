import Filter from "@/components/Filter/Filter";
import { getVehicleTypes } from "@/utils/api";
import { datesArr } from "@/utils/datesArr";
import Link from "next/link";

export default function Home() {

  return (
    <main className="">
      <Filter />
      {/* <select>
        {data &&
          data.map((item: string) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
      </select>
      <select>
        {datesArr &&
          datesArr.map((item: number) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
      </select>
      <Link href={"/result/411/2015"}>
        <button>Next</button>
      </Link> */}
    </main>
  );
}
