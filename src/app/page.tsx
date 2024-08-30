import Filter from "@/components/Filter/Filter";
import { getVehicleTypes } from "@/utils/api";

export default async function Home() {
  const typesArr = await getVehicleTypes();

  return (
    <main>
      <h1 className="text-xl">Choose your filters for the car</h1>
      <Filter typesArr={typesArr} />
    </main>
  );
}
