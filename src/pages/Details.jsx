import { useGetPetQuery } from "../service/petApiService";
import { useParams } from "react-router-dom";
const DetailsIdea = () => {
  const { id } = useParams();
  const { isLoading, data: pet } = useGetPetQuery(id);
  if (isLoading) {
    return (
      <div>
        <p>loading...</p>
      </div>
    );
  }

  return (
    <div className="font-sans antialiased text-gray-900 leading-normal tracking-wider bg-cover h-screen bg-base-200">
      <div className="max-w-4xl flex items-center h-auto lg:h-screen flex-wrap mx-auto my-32 lg:my-0">
        {/* <!--Main Col--> */}
        <div
          id="profile"
          className="w-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-white opacity-75 mx-6 lg:mx-0"
        >
          <div className="p-4 md:p-12 text-center lg:text-left">
            {/* <!-- Image for mobile view--> */}
            <div
              className="block lg:hidden rounded-full shadow-xl mx-auto -mt-16 h-48 w-48 bg-cover bg-center"
              style={{
                backgroundImage: `url(${pet.photos[0].full})`,
              }}
            ></div>

            <h2 className="text-3xl font-bold pt-8 lg:pt-0">{pet.name}</h2>
            <div className="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-green-500 opacity-25"></div>
            <p className="pt-4 text-base font-bold flex items-center justify-center lg:justify-start">
              <svg
                className="h-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
              About
            </p>
            <p className="pt-2 text-gray-600 text-xs lg:text-sm font-semibold flex items-center justify-center lg:justify-start">
              Gender: {pet.gender}
            </p>
            <p className="pt-2 text-gray-600 text-xs lg:text-sm font-semibold flex items-center justify-center lg:justify-start">
              Breeds: {pet.breeds.primary}, {pet.breeds.secondary}
            </p>
            <p className="pt-2 text-gray-600 text-xs lg:text-sm font-semibold flex items-center justify-center lg:justify-start">
              Address: {pet.contact.address.city}, {pet.contact.address.state}
            </p>
            <p className="pt-2 text-gray-600 text-xs lg:text-sm font-semibold flex items-center justify-center lg:justify-start">
              Email: {pet.contact.email}
            </p>
            <p className="pt-2 text-gray-600 text-xs lg:text-sm font-semibold flex items-center justify-center lg:justify-start">
              Phone: {pet.contact.phone}
            </p>
            <p className="pt-8 text-sm">{pet.description}</p>

            <div className="pt-12 pb-8">
              <a
                href={pet.url}
                target="_blank"
                rel="noreferrer"
                className="bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded-full"
              >
                View More
              </a>
            </div>
          </div>
        </div>

        {/* <!--Img Col--> */}
        <div className="w-full lg:w-2/5">
          {/* <!-- Big profile image for side bar (desktop) --> */}
          <img
            src={pet.photos[0].full}
            className="rounded-none lg:rounded-lg shadow-2xl hidden lg:block"
            alt="profile"
          />
        </div>
      </div>
    </div>
  );
};

export default DetailsIdea;
