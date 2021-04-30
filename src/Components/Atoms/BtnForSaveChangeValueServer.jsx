import PropTypes from 'prop-types'
import { memo } from 'react'
import { connect } from 'react-redux'
import { InputWhichCanBeChanged, optionInputWichChange } from '../../const'
import { updateValueOfServer } from '../../store/action/updateValuesOfServer'

const BtnForSaveChangeValueServer = ({
  isLoading,
  value,
  index,
  selectedServer,
  updateValueOfServer,
  serverName,
  serverType,
}) => {
  return (
    <button
      disabled={isLoading ? 'disabled' : ''}
      onClick={() => {
        updateValueOfServer(
          selectedServer[1],
          index,
          value[0],
          optionInputWichChange[2],
          value[0] === Object.keys(InputWhichCanBeChanged)[0]
            ? serverName
            : serverType,
        )
      }}
    >
      ok
    </button>
  )
}

BtnForSaveChangeValueServer.propTypes = {
  index: PropTypes.number,
  isLoading: PropTypes.bool,
  selectedServer: PropTypes.array,
  updateValueOfServer: PropTypes.func,
  value: PropTypes.array,
}

const mapToDispatch = (dispatch) => ({
  updateValueOfServer: (id, index, type, option, valueRecord) =>
    dispatch(updateValueOfServer(id, index, type, option, valueRecord)),
})

const mapStateToProps = ({
  serverListReducers,
  userActionWithInputsReducer,
}) => ({
  selectedServer: serverListReducers.selectedServer,
  isLoading: serverListReducers.isLoadingRequestToChangeValueServer,
  serverName: userActionWithInputsReducer.server_name,
  serverType: userActionWithInputsReducer.server_type,
})

export default memo(
  connect(mapStateToProps, mapToDispatch)(BtnForSaveChangeValueServer),
)
