import { USERS_ACTION_TYPES } from './users.types';
import { v4 as uuid } from 'uuid';

const USERS_INITIAL_STATE = [
  {
    id: uuid(),
    name: 'Alassane',
    role: 'Accountant',
    status: 'inactive',
  },
];

export const usersReducer = (state = USERS_INITIAL_STATE, action) => {
  switch (action.type) {
    case USERS_ACTION_TYPES.ADD_USER: {
      return [...state, action.payload];
    }
    case USERS_ACTION_TYPES.EDIT_USER: {
      return state.map((user) =>
        user.id === action.payload.id ? action.payload : user
      );
    }
    case USERS_ACTION_TYPES.DELETE_USER: {
      return state.filter((user) => user.id !== action.payload.id);
    }
    default:
      return state;
  }
};
