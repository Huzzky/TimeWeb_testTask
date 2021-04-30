import {
  CLOSE_INPUT_FOR_CHANGE_VALUE_SERVER,
  ERROR_TO_SERVER_FOR_CHANGE_VALUE_SERVER,
  OPEN_INPUT_FOR_CHANGE_VALUE_SERVER,
  optionInputWichChange,
  REQUEST_TO_SERVER_FOR_CHANGE_VALUE_SERVER,
  SUCCESS_TO_SERVER_FOR_CHANGE_VALUE_SERVER,
} from '../../const'
import { recordChangeServerToDB } from '../localStorage/recordChangeServerToDB'

export const updateValueOfServer = (id, type, option, valueRecord) => {
  return (dispatch) => {
    if (option === optionInputWichChange[2]) {
      dispatch({
        type: REQUEST_TO_SERVER_FOR_CHANGE_VALUE_SERVER,
      })
      recordChangeServerToDB(id, type, valueRecord)
        .then((res) => {
          dispatch({
            type: SUCCESS_TO_SERVER_FOR_CHANGE_VALUE_SERVER,
            serverList: res,
            updateValuesServer: res[id],
          })
          dispatch({
            type: CLOSE_INPUT_FOR_CHANGE_VALUE_SERVER,
            idSelectedInputWhichChangeValue: id,
            typeSelectedInputWhichChangeValue: type,
          })
        })
        .catch((_) => {
          dispatch({
            type: ERROR_TO_SERVER_FOR_CHANGE_VALUE_SERVER,
          })
        })
    } else if (option === optionInputWichChange[1]) {
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
