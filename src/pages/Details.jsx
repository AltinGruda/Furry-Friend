import { useGetPetQuery } from "../service/petApiService";
import { useParams } from "react-router-dom";

const Details = () => {
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
    <div className="h-screen flex justify-center">
      <div className="container mx-auto my-5 p-5">
        <div className="md:flex no-wrap md:-mx-2 ">
          {/* <!-- Left Side --> */}
          <div className="w-full md:w-3/12 md:mx-2">
            {/* <!-- Profile Card --> */}
            <div className="bg-ebony-clay-900 p-3 border-t-4 border-green-400">
              <div className="image overflow">
                <img
                  className="h-auto w-full mx-auto"
                  src={pet.photos[0].full}
                  alt=""
                />
              </div>
              <h2 className="text-gray-900 font-bold text-xl leading-8 my-1">
                {pet.name}
              </h2>
              <h3 className="text-gray-600 font-lg text-semibold leading-6">
                {pet.breeds[0]}
              </h3>
              <ul className="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow px-3 mt-3 divide-y rounded shadow-sm">
                <li className="flex items-center py-1 break-all">
                  {pet.description}
                </li>
                <a
                  href={pet.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-bold font-semibold border-none"
                >
                  view more
                </a>

                <li className="md:block flex grow wrap justify-evenly items-center py-3">
                  <span>Status: </span>
                  {/* ml-5 sm:ml-5 md:ml-0 */}
                  <div className="text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-green-tag text-green-700 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-arrow-right mr-2"
                    >
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                    <span>{pet.status}</span>
                  </div>
                </li>
              </ul>
            </div>
            {/* <!-- End of profile card --> */}
            <div className="my-4"></div>
            {/* <!-- Friends card --> */}
            {/* <!-- End of friends card --> */}
          </div>
          {/* <!-- Right Side --> */}
          <div className="w-full md:w-9/12 h-64">
            {/* <!-- Profile tab --> */}
            {/* <!-- About Section --> */}
            <div className="bg-ebony-clay-900 p-3 shadow-sm rounded-sm">
              <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                <span className="text-green-500">
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
                </span>
                <span className="tracking-wide">About</span>
              </div>
              <div className="text-gray-700">
                <div className="grid md:grid-cols-2 text-sm">
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">Name</div>
                    <div className="px-4 py-2">{pet.name}</div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">Breeds</div>
                    <div className="px-4 py-2">
                      {pet.breeds.primary}, {pet.breeds.secondary}
                    </div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">Gender</div>
                    <div className="px-4 py-2">{pet.gender}</div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">Age</div>
                    <div className="px-4 py-2">{pet.age}</div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">
                      Current Address
                    </div>
                    <div className="px-4 py-2">
                      {pet.contact.address.city}, {pet.contact.address.state}
                    </div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">Colors</div>
                    <div className="px-4 py-2">
                      {pet.colors.primary === null
                        ? "(Not Available)"
                        : pet.colors.primary}{" "}
                      {pet.colors.secondary}
                    </div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">Email</div>
                    <div className="px-4 py-2">
                      <a
                        className="text-blue-800 break-all"
                        href={pet.contact.email}
                      >
                        {pet.contact.email}
                      </a>
                    </div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">Phone</div>
                    <div className="px-4 py-2">
                      {pet.contact.phone === null
                        ? "(Not Available)"
                        : pet.contact.phone}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- End of about section --> */}

            <div className="my-4"></div>

            {/* <!-- Experience and education --> */}
            <div className="bg-ebony-clay-900 p-3 shadow-sm rounded-sm">
              {/* <!-- End of Experience and education grid --> */}
              {/* I extract src from the json response */}
              {/* <iframe
                title={pet.name}
                className="w-full aspect-video"
                src={
                  pet.videos[0]?.embed
                    .split(" ")
                    .find((st) => st.includes("src"))
                    .split(">")[0]
                    .split(`"`)[1]
                }
              /> */}
            </div>
            {/* <!-- End of profile tab --> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
