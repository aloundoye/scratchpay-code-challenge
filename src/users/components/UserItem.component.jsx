import { useState } from 'react';

import Card from '../../shared/components/UIElements/Card.component';
import Button from '../../shared/components/FormElements/Button.component';
import Modal from '../../shared/components/UIElements/Modal.component..jsx';

import './UserItem.styles.css';

const UserItem = ({ user }) => {
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  const showDeleteWarningHandler = () => {
    setShowConfirmModal(true);
  };

  const cancelDeleteWarningHandler = () => {
    setShowConfirmModal(false);
  };
  const confirmDeleteHandler = () => {
    setShowConfirmModal(false);
  };
  return (
    <>
      <Modal
        show={showConfirmModal}
        onCancel={cancelDeleteWarningHandler}
        header="Are you sure ?"
        footerClass="user-item__modal-actions"
        footer={
          <>
            <Button inverse onClick={cancelDeleteWarningHandler}>
              CANCEL
            </Button>
            <Button danger onClick={confirmDeleteHandler}>
              DELETE
            </Button>
          </>
        }
      >
        <p>Do you really want to delete this user ?</p>
      </Modal>
      <li className="user-item">
        <Card className="user-item__content">
          <div className="user-item__info">
            <h2>id: {user.id}</h2>
            <h2>Name: {user.name}</h2>
            <h2>Role: {user.role}</h2>
            <h2>Status: {user.status}</h2>
          </div>
          <div className="user-item__actions">
            <Button to={`/users/${user.id}`}>EDIT</Button>
            <Button danger onClick={showDeleteWarningHandler}>
              DELETE
            </Button>
          </div>
        </Card>
      </li>
    </>
  );
};

export default UserItem;
