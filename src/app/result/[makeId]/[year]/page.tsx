import { useParams } from "next/navigation";

// export async function generateStaticParams() {
//   const { year, makeId } = useParams<{ year: string; makeId: string }>();

//   const posts = await fetch(
//     `https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeIdYear/makeId/${makeId}/modelyear/${year}?format=json`
//   ).then((res) => res.json());

//   return posts.map((post) => ({
//     slug: post.slug,
//   }));
// }

const Result = () => {
  return <div>page</div>;
};

export default Result;
