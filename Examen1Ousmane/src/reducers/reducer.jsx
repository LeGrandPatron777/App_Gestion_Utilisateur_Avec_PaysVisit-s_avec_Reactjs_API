import { REGISTER_USER, DELETE_USER } from "../actions/actionTypes";

const initialState = {
  users: [],
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_USER:
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    case DELETE_USER:
      return {
        ...state,
        users: state.users.filter((user) => user.nom !== action.payload),
      };

    case "ASSOCIATE_COUNTRY_TO_USER":
      const { userNom, countryName } = action.payload;
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.nom === userNom) {
            return {
              ...user,
              listPays: [...(user.listPays || []), countryName],
            };
          }
          return user;
        }),
      };
    default:
      return state;
  }
};

export default Reducer;
