import Results from "../components/Results";

const SearchParams = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-top">
            <h1 className="text-5xl font-bold">
              Find Your Furry Friend: Discover the Perfect Pet for Adoption!
            </h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="form-control">
                {/* eslint-disable-next-line jsx-a11y/label-has-associated-control*/}
                <label className="label">
                  <span className="label-text">Location</span>
                </label>
                <input
                  type="text"
                  placeholder="Location"
                  name="location"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                {/* eslint-disable-next-line jsx-a11y/label-has-associated-control*/}
                <label className="label">
                  <span className="label-text">Animal</span>
                </label>
                <select name="animal" className="input input-bordered">
                  <option />
                  {/* {ANIMALS.map((animal) => (
                  <option key={animal} value={animal}>
                    {animal}
                  </option>
                ))} */}
                </select>
                {/* eslint-disable-next-line jsx-a11y/label-has-associated-control*/}
              </div>
              <div className="form-control">
                {/* eslint-disable-next-line jsx-a11y/label-has-associated-control*/}
                <label className="label">
                  <span className="label-text">Breed</span>
                </label>
                <select name="animal" className="input input-bordered">
                  <option />
                  {/* {breeds.map((breed) => (
                  <option key={breed} value={breed}>
                    {breed}
                  </option>
                ))} */}
                </select>
                {/* eslint-disable-next-line jsx-a11y/label-has-associated-control*/}
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Search</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Results />
    </div>
  );
};

export default SearchParams;
