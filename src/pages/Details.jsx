import { useGetPetQuery } from "../service/petApiService";
import { useParams } from "react-router-dom";

const Details = () => {
  const { id } = useParams();
  const { isLoading, data: pet } = useGetPetQuery(id);
  console.log(pet);
  if (isLoading) {
    return (
      <div>
        <p>loading...</p>
      </div>
    );
  }

  return <div>{pet.name}</div>;
};

export default Details;
