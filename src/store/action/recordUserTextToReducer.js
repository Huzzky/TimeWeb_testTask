import {
  CHANGE_NAME_SERVER,
  CHANGE_NAME_SERVER_ERROR,
  CHANGE_TYPE_SERVER,
  InputWhichCanBeChanged,
} from '../../const'

export const recordUserTextToReducer = (
  userNewTypeOrNewNameServerString,
  typeInput,
) => {
  return (dispatch) => {
    if (typeInput === Object.keys(InputWhichCanBeChanged)[0]) {
      console.log(userNewTypeOrNewNameServerString.length)
      if (
        !userNewTypeOrNewNameServerString ||
        userNewTypeOrNewNameServerString.length > 16
      ) {
        dispatch({
          type: CHANGE_NAME_SERVER_ERROR,
        })
      } else {
        dispatch({
          type: CHANGE_NAME_SERVER,
          userFromInputNameForServerName: userNewTypeOrNewNameServerString,
        })
      }
    } else if (typeInput === Object.keys(InputWhichCanBeChanged)[1]) {
      console.log(
        !userNewTypeOrNewNameServerString
          ? 'vds'
          : userNewTypeOrNewNameServerString,
      )
      dispatch({
        type: CHANGE_TYPE_SERVER,
        userFromInputTypeForServerType: !userNewTypeOrNewNameServerString
          ? 'vds'
          : userNewTypeOrNewNameServerString,
      })
    }
  }
}
