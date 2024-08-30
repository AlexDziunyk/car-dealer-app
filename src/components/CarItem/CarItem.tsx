import { ICar } from "@/app/result/[makeId]/[year]/page";
interface ICarItemProps {
  car: ICar;
}

const CarItem = ({ car }: ICarItemProps) => {
  return (
    <div className="border border-[black] rounded-md p-3">
      <p>Make: {car.Make_Name}</p>
      <p>Model: {car.Model_Name}</p>
    </div>
  );
};

export default CarItem;
