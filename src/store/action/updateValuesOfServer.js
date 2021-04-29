import {
  CLOSE_INPUT_FOR_CHANGE_VALUE_SERVER,
  OPEN_INPUT_FOR_CHANGE_VALUE_SERVER,
  optionInputWichChange,
} from '../../const'

export const updateValueOfServer = (id, type, option) => {
  return (dispatch) => {
    if (option === optionInputWichChange[1]) {
      dispatch({
        type: CLOSE_INPUT_FOR_CHANGE_VALUE_SERVER,
        idSelectedInputWhichChangeValue: id,
        typeSelectedInputWhichChangeValue: type,
      })
    } else if (option === optionInputWichChange[0]) {
      dispatch({
        type: OPEN_INPUT_FOR_CHANGE_VALUE_SERVER,
        idSelectedInputWhichChangeValue: id,
        typeSelectedInputWhichChangeValue: type,
      })
    }
  }
}
