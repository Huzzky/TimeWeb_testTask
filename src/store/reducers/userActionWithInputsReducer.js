import {
  CHANGE_NAME_SERVER,
  CHANGE_NAME_SERVER_ERROR,
  CHANGE_TYPE_SERVER,
} from '../../const'

const initialState = {
  server_name: '',
  server_type: '',
  error: false,
}

export const userActionWithInputsReducer = (
  state = initialState,
  { type, userFromInputNameForServerName, userFromInputTypeForServerType },
) => {
  switch (type) {
    case CHANGE_NAME_SERVER_ERROR:
      return {
        ...state,
        error: true,
      }
    case CHANGE_NAME_SERVER:
      return {
        ...state,
        server_name: userFromInputNameForServerName,
        error: false,
      }
    case CHANGE_TYPE_SERVER:
      return {
        ...state,
        server_type: userFromInputTypeForServerType,
        error: false,
      }
    default:
      return {
        ...state,
      }
  }
}
