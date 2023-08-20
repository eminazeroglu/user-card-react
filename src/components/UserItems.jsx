import UserItem from "./UserItem";

function UserItems({items}) {
    return (
        <div className="space-y-5">
            {items.map((i, index) => (
                <UserItem key={index} item={i}/>
            ))}
        </div>
    );
}

export default UserItems;