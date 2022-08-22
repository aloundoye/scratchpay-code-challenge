import { useSelector } from 'react-redux';

import { selectUsers } from '../../shared/store/users/users.selector';
import UserList from '../components/UserList.component';

const Users = () => {
  const users = useSelector(selectUsers);

  return users && <UserList users={users} />;
};

export default Users;
