import React from 'react';

import Modal from './Modal.component.';
import Button from '../FormElements/Button.component';

const ErrorModal = (props) => {
  return (
    <Modal
      onCancel={props.onClear}
      header="An error has occurred!"
      show={!!props.error}
      footer={<Button onClick={props.onClear}>Fermer</Button>}
    >
      <p>{props.error}</p>
    </Modal>
  );
};

export default ErrorModal;
