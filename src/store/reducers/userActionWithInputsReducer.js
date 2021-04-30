import { CHANGE_NAME_SERVER, CHANGE_TYPE_SERVER } from '../../const'

const initialState = {
  server_name: '',
  server_type: '',
}

export const userActionWithInputsReducer = (
  state = initialState,
  { type, userFromInputNameForServerName, userFromInputTypeForServerType },
) => {
  switch (type) {
    case CHANGE_NAME_SERVER:
      return {
        ...state,
        server_name: userFromInputNameForServerName,
      }
    case CHANGE_TYPE_SERVER:
      return {
        ...state,
        server_type: userFromInputTypeForServerType,
      }
    default:
      return {
        ...state,
      }
  }
}
