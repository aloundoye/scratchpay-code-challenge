import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  VALIDATOR_EMAIL,
  VALIDATOR_REQUIRE,
} from '../../shared/util/validators';
import { useForm } from '../../shared/hooks/form-hook';
import Button from '../../shared/components/FormElements/Button.component';
import Input from '../../shared/components/FormElements/Input.component';
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner.component';
import { selectUsers } from '../../shared/store/users/users.selector';
import { editUser } from '../../shared/store/users/users.action';

import './UserForm.styles.css';

const UpdateUser = () => {
  const userId = useParams().userId;
  const [isLoading, setIsLoading] = useState(false);
  const users = useSelector(selectUsers);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [user] = users.filter((user) => user.id === userId);

  const [formState, inputHandler] = useForm(
    {
      firstName: { value: '', isValid: true },
      lastName: { value: '', isValid: true },
      email: { value: '', isValid: true },
    },
    true
  );

  const userUpdateSubmitHandler = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    dispatch(
      editUser({
        id: user.id,
        firstName: formState.inputs.firstName.value,
        lastName: formState.inputs.lastName.value,
        email: formState.inputs.email.value,
        role: event.target.role.value,
        status: event.target.status.value,
      })
    );
    setIsLoading(false);

    navigate('/');
  };

  return (
    <>
      {!user && isLoading && <LoadingSpinner asOverlay />}
      <form className="product-form" onSubmit={userUpdateSubmitHandler}>
        {user && !isLoading && (
          <>
            <Input
              id="firstName"
              element="input"
              type="text"
              label="First Name"
              initialValue={user.firstName}
              initialValid={true}
              validators={[VALIDATOR_REQUIRE()]}
              errorText="Please add your first name!"
              onInput={inputHandler}
            />

            <Input
              id="lastName"
              element="input"
              type="text"
              label="Last Name"
              initialValue={user.lastName}
              initialValid={true}
              validators={[VALIDATOR_REQUIRE()]}
              errorText="Please add your last name!"
              onInput={inputHandler}
            />

            <Input
              id="email"
              element="input"
              type="email"
              label="E-mail"
              initialValue={user.email}
              initialValid={true}
              validators={[VALIDATOR_EMAIL(), VALIDATOR_REQUIRE()]}
              errorText="Please add a valid e-mail"
              onInput={inputHandler}
            />

            <div className="form-control">
              <label htmlFor="role">Role</label>
              <select name="role" id="role" defaultValue={user.role}>
                <option value="accountant">accountant</option>
                <option value="admin">admin</option>
                <option value="doctor">doctor</option>
              </select>
            </div>

            <div className="form-control">
              <label htmlFor="status">Status</label>
              <select name="status" id="status" defaultValue={user.status}>
                <option value="active">active</option>
                <option value="inactive">inactive</option>
              </select>
            </div>
            <Button type="submit" disabled={!formState.isValid}>
              MODIFIER PRODUIT
            </Button>
          </>
        )}
      </form>
    </>
  );
};

export default UpdateUser;
