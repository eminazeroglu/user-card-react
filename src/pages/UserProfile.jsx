import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Page from "../components/Page";

function UserProfile() {
  const { id } = useParams();
  const [user, setUser] = useState(false);

  const fetchById = async () => {
    const res = await axios.get("https://randomuser.me/api/?uuid=" + id);
    setUser(res.data.results[0]);
  };

  useEffect(() => {
    fetchById();
  }, [id]);

  return (
    <Page title="User Profile">
      {user && (
        <>
          <div className="border p-3 flex">
            <figure className="w-[60px] h-[60px]">
              <img
                className="w-full h-full object-cover rounded-full"
                src={user.picture.thumbnail}
                alt=""
              />
            </figure>
            <div className="flex-1 ml-4">
              <h4 className="text-blue-500 font-bold">{`${user.name.first} ${user.name.last}`}</h4>
              <p>{user.email}</p>
            </div>
          </div>
          <div>
            <p>
              <b>Gender: </b>
              <span>{user.gender}</span>
            </p>
            <p>
              <b>Phone: </b>
              <span>{user.phone}</span>
            </p>
            <p>
              <b>Country: </b>
              <span>{user.location.country}</span>
            </p>
            <p>
              <b>State: </b>
              <span>{user.location.state}</span>
            </p>
            <p>
              <b>City: </b>
              <span>{user.location.city}</span>
            </p>
          </div>
        </>
      )}
      {!user && "Yuklenir"}
    </Page>
  );
}

export default UserProfile;
