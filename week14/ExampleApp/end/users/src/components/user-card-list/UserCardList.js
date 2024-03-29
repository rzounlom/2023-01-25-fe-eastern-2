import "./UserCardList.scss";

import UserCard from "../user-card/UserCard";

export default function UserCardList({ users }) {
  if (users.length > 0) {
    //check if there are currently any users in the list
    return (
      //map over users and render a card for each user and render a user card
      <div className="card-list-container">
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    );
  } else {
    return (
      //return message if there are not users in the users array
      <div className="card-list-container">
        <div className="no-users">No Current Users</div>
      </div>
    );
  }
}
