import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Results from "../components/Results";
import useBreedList from "../hooks/useBreedList";
import { all } from "../service/slices/searchParamsSlice";
import { useSearchQuery } from "../service/petApiService";
import Logo from "../components/Logo";
const ANIMALS = ["bird", "cat", "dog", "rabbit"];

const SearchParams = () => {
  const [animal, setAnimal] = useState("");
  const [breeds] = useBreedList(animal);
  const dispatch = useDispatch();
  const searchParams = useSelector((state) => state.searchParams.value);
  let { data: pets } = useSearchQuery(searchParams);

  pets = pets ?? [];

  return (
    <div>
      <div className="flex justify-center">
        <Logo />
      </div>
      <div className="md:flex md:flex-center md:justify-center">
        <div className="hero-content flex-col lg:flex-row-reverse items-center">
          <div className="text-center lg:text-top">
            <h1 className="text-5xl font-bold  md:justify-items-start">
              Find Your Furry Friend: Discover the Perfect Pet for Adoption!
            </h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form
              className="card-body"
              onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.target);
                const obj = {
                  type: formData.get("animal") ?? "",
                  breed: formData.get("breed") ?? "",
                  location: formData.get("location") ?? "",
                };
                // if(obj.type === '' && obj.breed === "" && obj.location === ""){
                //  do something to load data on first page load
                // }
                dispatch(all(obj));
              }}
            >
              <div className="form-control">
                {/* eslint-disable-next-line jsx-a11y/label-has-associated-control*/}
                <label className="label">
                  <span className="label-text">Location</span>
                </label>
                <input
                  type="text"
                  placeholder="State e.x: NJ, NY, LA"
                  name="location"
                  className="input input-bordered"
                />
              </div>

              <div className="form-control">
                {/* eslint-disable-next-line jsx-a11y/label-has-associated-control*/}
                <label className="label">
                  <span className="label-text">Animal</span>
                </label>
                <select
                  id="animal"
                  name="animal"
                  className="input input-bordered"
                  onChange={(e) => {
                    setAnimal(e.target.value);
                  }}
                  onBlur={(e) => {
                    setAnimal(e.target.value);
                  }}
                >
                  <option />
                  {ANIMALS.map((animal) => (
                    <option key={animal} value={animal}>
                      {animal}
                    </option>
                  ))}
                </select>
                {/* eslint-disable-next-line jsx-a11y/label-has-associated-control*/}
              </div>

              <div className="form-control">
                {/* eslint-disable-next-line jsx-a11y/label-has-associated-control*/}
                <label className="label">
                  <span className="label-text">Breed</span>
                </label>
                <select
                  disabled={!breeds.length}
                  name="breed"
                  className="input input-bordered"
                >
                  <option />
                  {breeds.map((breed) => (
                    <option key={breed.name} value={breed.name}>
                      {breed.name}
                    </option>
                  ))}
                </select>
                {/* eslint-disable-next-line jsx-a11y/label-has-associated-control*/}
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary" type="submit">
                  Search
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Results pets={pets} />
    </div>
  );
};

export default SearchParams;
