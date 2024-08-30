export interface IVehicle {
  MakeId: number;
  MakeName: string;
  VehicleTypeId: number;
  VehicleTypeName: string;
}

export const getVehicleTypes = async () => {
  try {
    const response = await fetch(
      "https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json"
    );
    const json = await response.json();

    return json.Results;
  } catch (error) {
    console.error(error);
    return { error: "We couldn't load types!" };
  }
};
