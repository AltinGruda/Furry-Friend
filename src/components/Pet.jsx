import { Link } from "react-router-dom";
const Pet = (props) => {
  return (
    <tr>
      <th></th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img
                // src="https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64554619/2/?bust=1684434417&width=100" //props.photo.small
                src={props.images[0]?.small}
                alt="animal"
              />
            </div>
          </div>
          <div>
            <div className="font-bold">
              {props.name.length > 7 ? props.name.split(" ")[0] : props.name}
            </div>
          </div>
        </div>
      </td>
      <td className="hidden sm:table-cell">
        <p>{props.location}</p>
      </td>
      <td className="hidden sm:table-cell">
        <p>{props.breed}</p>
      </td>
      <th>
        <Link to={`/details/${props.id}`}>
          <button className="btn btn-ghost btn-xs">DETAILS</button>
        </Link>
      </th>
    </tr>
  );
};

export default Pet;
