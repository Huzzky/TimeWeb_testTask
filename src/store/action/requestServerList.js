import {
  ERROR_TO_SERVER_FOR_SERVER_LIST,
  REQUEST_TO_SERVER_FOR_SERVER_LIST,
  SUCCESS_REQUEST_TO_SERVER_FOR_SERVER_LIST,
} from '../../const'
import { serverListStart } from '../localStorage/startLoadingServerList'

export const requestServerList = () => {
  return (dispatch) => {
    dispatch({
      type: REQUEST_TO_SERVER_FOR_SERVER_LIST,
    })
    setTimeout(() => {
      try {
        let _ = serverListStart()

        dispatch({
          type: SUCCESS_REQUEST_TO_SERVER_FOR_SERVER_LIST,
          serverList: _,
        })
      } catch (_) {
        dispatch({
          type: ERROR_TO_SERVER_FOR_SERVER_LIST,
        })
      }
    }, 1500)
  }
}
