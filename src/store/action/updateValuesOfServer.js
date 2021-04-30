import {
  CLOSE_INPUT_FOR_CHANGE_VALUE_SERVER,
  ERROR_TO_SERVER_FOR_CHANGE_VALUE_SERVER,
  OPEN_INPUT_FOR_CHANGE_VALUE_SERVER,
  optionInputWichChange,
  REQUEST_TO_SERVER_FOR_CHANGE_VALUE_SERVER,
  SUCCESS_TO_SERVER_FOR_CHANGE_VALUE_SERVER,
} from '../../const'
import { recordChangeServerToDB } from '../localStorage/recordChangeServerToDB'

// @ idServer - нужен для записи значения сервера через его id
// @ idInput - для обозначения id выбранного поля изменения значений сервера
// @ type - тип поля изменения значения сервера (имя сервера или тип сервера)
// @ option - вариант исхода поля (открыть, закрыть без сохранения, сохранить и закрыть)
// @ valueRecord - значение для записи в базу данных
export const updateValueOfServer = (
  idServer,
  idInput,
  type,
  option,
  valueRecord,
) => {
  return (dispatch) => {
    if (option === optionInputWichChange[2]) {
      dispatch({
        type: REQUEST_TO_SERVER_FOR_CHANGE_VALUE_SERVER,
      })
      recordChangeServerToDB(idServer, type, valueRecord)
        .then((res) => {
          dispatch({
            type: SUCCESS_TO_SERVER_FOR_CHANGE_VALUE_SERVER,
            serverList: res,
            updateValuesServer: res[idServer],
            idSelectedInputWhichChangeValue: idServer,
          })
          dispatch({
            type: CLOSE_INPUT_FOR_CHANGE_VALUE_SERVER,
            idSelectedInputWhichChangeValue: idInput,
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
        idSelectedInputWhichChangeValue: idInput,
        typeSelectedInputWhichChangeValue: type,
      })
    } else if (option === optionInputWichChange[0]) {
      dispatch({
        type: OPEN_INPUT_FOR_CHANGE_VALUE_SERVER,
        idSelectedInputWhichChangeValue: idInput,
        typeSelectedInputWhichChangeValue: type,
      })
    }
  }
}
