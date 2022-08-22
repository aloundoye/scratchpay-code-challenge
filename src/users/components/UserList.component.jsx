import Card from '../../shared/components/UIElements/Card.component';
import UserItem from './UserItem.component';

import './UserList.styles.css';

const UserList = ({ users }) => {
  if (users.length === 0) {
    return (
      <div className="user-list center">
        <Card>
          <h2>No user found</h2>
        </Card>
      </div>
    );
  }

  return (
    <ul className="user-list">
      {users.map((user) => (
        <UserItem key={user.id} user={user} />
      ))}
    </ul>
  );
};

export default UserList;
