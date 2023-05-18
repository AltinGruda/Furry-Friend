const Pet = () => {
  return (
    <tr>
      <th></th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img
                src="/tailwind-css-component-profile-2@56w.png"
                alt="Avatar Tailwind CSS Component"
              />
            </div>
          </div>
          <div>
            <div className="font-bold">Animal Name</div>
          </div>
        </div>
      </td>
      <td>
        <p>Location</p>
      </td>
      <td>
        <p>Breed</p>
      </td>
      <th>
        <button className="btn btn-ghost btn-xs">DETAILS</button>
      </th>
    </tr>
  );
};

export default Pet;
