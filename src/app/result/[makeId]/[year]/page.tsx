import CarItem from "@/components/CarItem/CarItem";
import { datesArr } from "@/utils/datesArr";

export interface ICar {
  Make_ID: number;
  Make_Name: string;
  Model_ID: number;
  Model_Name: string;
}

export async function generateStaticParams() {
  try {
    const response = await fetch(
      "https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json"
    ).then((res) => res.json());

    const makeIdArr = response.Results.map((item: ICar) =>
      item.Make_ID?.toString()
    );

    const params = makeIdArr.flatMap((makeId: string) =>
      datesArr.map((year) => ({
        makeId,
        year: year.toString(),
      }))
    );

    return params;
  } catch (error) {
    console.error(error);
    return { error: "We had a problem with finding the cars!" };
  }
}

async function getCar(makeId: string, year: string) {
  try {
    const car = await fetch(
      `https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeIdYear/makeId/${makeId}/modelyear/${year}?format=json`
    ).then((res) => res.json());

    return car.Results;
  } catch (error) {
    console.error(error);
    return null;
  }
}

const Result = async ({
  params,
}: {
  params: { makeId: string; year: string };
}) => {
  const cars = await getCar(params.makeId, params.year);

  return (
    <div>
      <h2 className="text-lg">Year: {params.year}</h2>
      <div className="flex flex-row gap-4 justify-center aling-center mt-4">
        {cars && cars.map((item: ICar) => (
          <CarItem key={item.Make_ID} car={item} />
        ))}
        {!cars && <p>Oh, I'm sorry, but we couldn't find such car. Try again.</p>}
      </div>
    </div>
  );
};

export default Result;
