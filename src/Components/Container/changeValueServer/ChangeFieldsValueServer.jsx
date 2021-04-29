import PropTypes from 'prop-types'
import { memo } from 'react'
import { connect } from 'react-redux'
import {
  InputWhichCanBeChanged,
  optionInputWichChange,
  typesOfServer,
} from '../../../const'
import { updateValueOfServer } from '../../../store/action/updateValuesOfServer'

const ChangeFieldsValueServer = ({ value, index, updateValueOfServer }) => {
  let optionServerTypeArray = typesOfServer.map((value, index) => {
    return (
      <option key={index} value={value}>
        {value}
      </option>
    )
  })

  return (
    <div>
      {value[0] === Object.keys(InputWhichCanBeChanged)[1] ? (
        <select>{optionServerTypeArray}</select>
      ) : (
        <input></input>
      )}
      <button
        onClick={() => {
          updateValueOfServer(index, value[0], optionInputWichChange[1])
        }}
      >
        ok
      </button>
    </div>
  )
}

ChangeFieldsValueServer.propTypes = {
  index: PropTypes.number,
  updateValueOfServer: PropTypes.func,
  value: PropTypes.array,
}

const mapToDispatch = (dispatch) => ({
  updateValueOfServer: (id, type, option) =>
    dispatch(updateValueOfServer(id, type, option)),
})

export default memo(connect(null, mapToDispatch)(ChangeFieldsValueServer))
