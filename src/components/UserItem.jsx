import { NavLink } from "react-router-dom";

function UserItem({item}) {
    return ( 
        <div className="border p-3 flex">
            <figure className="w-[60px] h-[60px]">
                <img className="w-full h-full object-cover rounded-full" src={item.picture.thumbnail} alt="" />
            </figure>
            <div className="flex-1 ml-4">
                <NavLink to={`/users/${item.login.uuid}`}>
                    <h4 className="text-blue-500 font-bold">{`${item.name.first} ${item.name.last}`}</h4>
                </NavLink>
                <p>{item.email}</p>
            </div>
        </div>
     );
}

export default UserItem;