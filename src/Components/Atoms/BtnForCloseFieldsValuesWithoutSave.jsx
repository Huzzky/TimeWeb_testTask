import PropTypes from 'prop-types'
import { memo } from 'react'
import { connect } from 'react-redux'
import { optionInputWichChange } from '../../const'
import { updateValueOfServer } from '../../store/action/updateValuesOfServer'

const BtnForCloseFieldsValuesWithoutSave = ({
  index,
  value,
  updateValueOfServer,
}) => {
  return (
    <button
      onClick={() => {
        updateValueOfServer(index, value[0], optionInputWichChange[1])
      }}
    >
      X
    </button>
  )
}

BtnForCloseFieldsValuesWithoutSave.propTypes = {
  updateValueOfServer: PropTypes.func,
}

const mapToDispatch = (dispatch) => ({
  updateValueOfServer: (id, type, option) =>
    dispatch(updateValueOfServer(id, type, option)),
})

export default memo(
  connect(null, mapToDispatch)(BtnForCloseFieldsValuesWithoutSave),
)
