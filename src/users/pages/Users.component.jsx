import {useSelector} from 'react-redux';
import UserList from '../components/UserList.component';

const Users = () => {
  const users = useSelector();  

  if (users.length === 0) {
    return <div>Not user found</div>;
  }

  return users && <UserList users={users} />;
};

export default Users;
