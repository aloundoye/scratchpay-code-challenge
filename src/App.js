import { Routes, Route, Navigate } from 'react-router-dom';
import { persistor } from './shared/store/store';

import Users from './users/pages/Users.component';
import NewUser from './users/pages/NewUser.component';
// import UpdateUser from './users/pages/UpdateUser.component';
import Layout from './shared/components/Layout/Layout.component';
import { useEffect } from 'react';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Users />} />
        <Route path="/users/new" element={<NewUser />} />
        {/* <Route path="/users/:userId" element={<UpdateUser />} /> */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}

export default App;
