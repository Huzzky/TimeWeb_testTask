import {
  ERROR_TO_SERVER_FOR_SERVER_LIST,
  REQUEST_TO_SERVER_FOR_SERVER_LIST,
  SELECTION_SERVER_FOR_VIEW,
  SUCCESS_REQUEST_TO_SERVER_FOR_SERVER_LIST,
  OPEN_INPUT_FOR_CHANGE_VALUE_SERVER,
  CLOSE_INPUT_FOR_CHANGE_VALUE_SERVER,
} from '../../const'

const initialState = {
  isLoading: false,
  isError: false,
  serverList: [],
  selectedServer: [],
  pageOpenSelectedServer: false,
  BoolenValueInputChangeNameServer: false,
  selectedInputWhichChangeValues: ['', ''],
}

export const serverListReducers = (
  state = initialState,
  {
    type,
    serverList,
    selectedServerId,
    idSelectedInputWhichChangeValue,
    typeSelectedInputWhichChangeValue,
  },
) => {
  switch (type) {
    case OPEN_INPUT_FOR_CHANGE_VALUE_SERVER:
      let arrayStateServersInputForOpen = [
        ...state.selectedInputWhichChangeValues,
      ]
      state.selectedInputWhichChangeValues.forEach((_, index) => {
        if (index === idSelectedInputWhichChangeValue) {
          arrayStateServersInputForOpen[
            index
          ] = typeSelectedInputWhichChangeValue
        }
      })
      return {
        ...state,
        selectedInputWhichChangeValues: [...arrayStateServersInputForOpen],
      }
    case CLOSE_INPUT_FOR_CHANGE_VALUE_SERVER:
      let arrayStateServersInputForClose = [
        ...state.selectedInputWhichChangeValues,
      ]
      state.selectedInputWhichChangeValues.forEach((_, index) => {
        if (index === idSelectedInputWhichChangeValue) {
          arrayStateServersInputForClose[index] = ''
        }
      })
      return {
        ...state,
        selectedInputWhichChangeValues: [...arrayStateServersInputForClose],
      }
    case SELECTION_SERVER_FOR_VIEW:
      return {
        ...state,
        selectedServer: state.serverList[selectedServerId],
        pageOpenSelectedServer: true,
        selectedInputWhichChangeValues: ['', ''],
      }
    case REQUEST_TO_SERVER_FOR_SERVER_LIST:
      return {
        ...state,
        isLoading: true,
      }

    case SUCCESS_REQUEST_TO_SERVER_FOR_SERVER_LIST:
      return {
        ...state,
        isLoading: false,
        serverList: serverList,
      }
    case ERROR_TO_SERVER_FOR_SERVER_LIST:
      return {
        ...state,
        isLoading: false,
        isError: true,
      }

    default:
      return state
  }
}
