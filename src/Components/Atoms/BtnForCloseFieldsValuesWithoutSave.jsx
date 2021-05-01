import PropTypes from 'prop-types'
import { memo } from 'react'
import { connect } from 'react-redux'
import { optionInputWichChange } from '../../const'
import { updateValueOfServer } from '../../store/action/updateValuesOfServer'

const BtnForCloseFieldsValuesWithoutSave = ({
  index,
  value,
  updateValueOfServer,
  isLoading,
  className,
}) => {
  return (
    <button
      className={className}
      disabled={isLoading ? 'disabled' : ''}
      onClick={() => {
        updateValueOfServer(null, index, value[0], optionInputWichChange[1])
      }}
    >
      X
    </button>
  )
}

BtnForCloseFieldsValuesWithoutSave.propTypes = {
  updateValueOfServer: PropTypes.func,
}

const mapStateToProps = ({ serverListReducers }) => ({
  isLoading: serverListReducers.isLoadingRequestToChangeValueServer,
})

const mapToDispatch = (dispatch) => ({
  updateValueOfServer: (id, index, type, option) =>
    dispatch(updateValueOfServer(id, index, type, option)),
})

export default memo(
  connect(mapStateToProps, mapToDispatch)(BtnForCloseFieldsValuesWithoutSave),
)
