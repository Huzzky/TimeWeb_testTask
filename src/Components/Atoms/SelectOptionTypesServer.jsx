import { memo } from 'react'
import { connect } from 'react-redux'
import { InputWhichCanBeChanged, typesOfServer } from '../../const'
import { recordUserTextToReducer } from '../../store/action/recordUserTextToReducer'

const SelectOptionTypesServer = ({ isLoading, recordUserTextToReducer }) => {
  let optionServerTypeArray = typesOfServer.map((value, index) => {
    return (
      <option
        className="change-container__change-input--option"
        key={index}
        value={value}
      >
        {value}
      </option>
    )
  })
  return (
    <select
      className={'change-container__change-input-select'}
      onChange={(e) => {
        recordUserTextToReducer(
          !e.currentTarget.value ? typesOfServer[1] : e.currentTarget.value,
          Object.keys(InputWhichCanBeChanged)[1],
        )
      }}
      disabled={isLoading ? 'disabled' : ''}
    >
      {optionServerTypeArray}
    </select>
  )
}

const mapToDispatch = (dispatch) => ({
  recordUserTextToReducer: (string, type) =>
    dispatch(recordUserTextToReducer(string, type)),
})

const mapStateToProps = ({ serverListReducers }) => ({
  isLoading: serverListReducers.isLoadingRequestToChangeValueServer,
})

export default memo(
  connect(mapStateToProps, mapToDispatch)(SelectOptionTypesServer),
)
