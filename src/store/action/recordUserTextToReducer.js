import {
  CHANGE_NAME_SERVER,
  CHANGE_TYPE_SERVER,
  InputWhichCanBeChanged,
} from '../../const'

export const recordUserTextToReducer = (
  userNewTypeOrNewNameServerString,
  typeInput,
) => {
  return (dispatch) => {
    if (typeInput === Object.keys(InputWhichCanBeChanged)[0]) {
      dispatch({
        type: CHANGE_NAME_SERVER,
        userFromInputNameForServerName: userNewTypeOrNewNameServerString,
      })
    } else if (typeInput === Object.keys(InputWhichCanBeChanged)[1]) {
      dispatch({
        type: CHANGE_TYPE_SERVER,
        userFromInputTypeForServerType: userNewTypeOrNewNameServerString,
      })
    }
  }
}
