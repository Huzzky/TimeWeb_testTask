import { OPEN_INPUT_FOR_CHANGE_VALUE_SERVER } from '../../const'

export const selectionServerForView = () => {
  return (dispatch) => {
    dispatch({
      type: OPEN_INPUT_FOR_CHANGE_VALUE_SERVER,
    })
  }
}
