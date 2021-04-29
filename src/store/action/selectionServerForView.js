import { SELECTION_SERVER_FOR_VIEW } from '../../const'

export const selectionServerForView = (selectedServerId) => {
  return (dispatch) => {
    dispatch({
      type: SELECTION_SERVER_FOR_VIEW,
      selectedServerId: selectedServerId,
    })
  }
}
