import Pet from "./Pet";

const Results = ({ pets }) => {
  if (!pets.length) {
    return <h2 className="flex justify-center text-2xl">No Animals Found!</h2>;
  }

  return (
    <div className="overflow-x-auto w-full">
      <table className="table w-full">
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th className="hidden sm:table-cell">Location</th>
            <th className="hidden sm:table-cell">Breed</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {pets.map((pet) => (
            <Pet
              key={pet.id}
              id={pet.id}
              animal={pet.type}
              breed={pet.breeds.primary}
              name={pet.name}
              images={pet.photos}
              location={pet.contact.address.state}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Results;
