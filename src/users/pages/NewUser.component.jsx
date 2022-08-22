import { useState } from 'react';
import {
  VALIDATOR_EMAIL,
  VALIDATOR_REQUIRE,
} from '../../shared/util/validators';
import { useForm } from '../../shared/hooks/form-hook';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuid } from 'uuid';

import Input from '../../shared/components/FormElements/Input.component';
import Button from '../../shared/components/FormElements/Button.component';
import ErrorModal from '../../shared/components/UIElements/ErrorModal.component';
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner.component';
import { selectUsers } from '../../shared/store/users/users.selector';

import './UserForm.styles.css';
import { addUser } from '../../shared/store/users/users.action';

const initialStates = {
  firstName: { value: '', isValid: false },
  lastName: { value: '', isValid: false },
  email: { value: '', isValid: false },
  role: { value: 'admin', isValid: true },
  status: { value: 'inactive', isValid: true },
};

const NewUser = () => {
  const [formState, inputHandler] = useForm(initialStates, false);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const users = useSelector(selectUsers);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userSubmitHandler = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    const existEmail = users.find(
      (user) => user.email === formState.inputs.email.value
    );

    if (existEmail) {
      setError('E-mail already exists!!!');
    } else {
      dispatch(
        addUser({
          id: uuid(),
          firstName: formState.inputs.firstName.value,
          lastName: formState.inputs.lastName.value,
          email: formState.inputs.email.value,
          role: event.target.role.value,
          status: event.target.status.value,
        })
      );
      navigate('/');
    }

    setIsLoading(false);
  };

  const clearError = () => {
    setError(null);
  };

  return (
    <>
      <ErrorModal error={error} onClear={clearError} />
      <form className="product-form" onSubmit={userSubmitHandler}>
        {isLoading && <LoadingSpinner asOverlay />}

        <Input
          id="firstName"
          element="input"
          type="text"
          label="First Name"
          validators={[VALIDATOR_REQUIRE()]}
          errorText="Please add your first name!"
          onInput={inputHandler}
        />
        <Input
          id="lastName"
          element="input"
          type="text"
          label="Last Name"
          validators={[VALIDATOR_REQUIRE()]}
          errorText="Please add your last name!"
          onInput={inputHandler}
        />
        <Input
          id="email"
          element="input"
          type="email"
          label="E-mail"
          validators={[VALIDATOR_EMAIL(), VALIDATOR_REQUIRE()]}
          errorText="Please add a valid e-mail"
          onInput={inputHandler}
        />
        <div className="form-control">
          <label for="role">Role</label>
          <select name="role" id="role">
            <option value="accountant">accountant</option>
            <option value="admin">admin</option>
            <option value="doctor">doctor</option>
          </select>
        </div>

        <div className="form-control">
          <label for="status">Status</label>
          <select name="status" id="status">
            <option value="active">active</option>
            <option value="inactive">inactive</option>
          </select>
        </div>

        <Button type="submit" disabled={!formState.isValid}>
          ADD USER
        </Button>
      </form>
    </>
  );
};

export default NewUser;
