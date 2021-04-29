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
      return {
        ...state,
        selectedInputWhichChangeValues: state.selectedInputWhichChangeValues.map(
          (_, index) => {
            if (index === idSelectedInputWhichChangeValue) {
              return (state.selectedInputWhichChangeValues[
                index
              ] = typeSelectedInputWhichChangeValue)
            }
            return -1
          },
        ),
      }
    case CLOSE_INPUT_FOR_CHANGE_VALUE_SERVER:
      return {
        ...state,
        selectedInputWhichChangeValues: state.selectedInputWhichChangeValues.map(
          (_, index) => {
            if (index === idSelectedInputWhichChangeValue) {
              return (state.selectedInputWhichChangeValues[index] = '')
            }
            return -1
          },
        ),
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
