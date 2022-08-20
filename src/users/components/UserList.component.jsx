import Card from '../../shared/components/UIElements/Card.component';
import UserItem from './UserItem.component';

import './UserList.styles.css';

const UserList = ({ users, error }) => {
  if (users.length === 0 || error) {
    return (
      <div className="product-list center">
        <Card>
          <h2>No user found</h2>
        </Card>
      </div>
    );
  }

  return (
    <ul className="product-list">
      {users.map((user) => (
        <UserItem key={user.id} user={user} />
      ))}
    </ul>
  );
};

export default UserList;
