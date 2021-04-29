import PropTypes from 'prop-types'
import { useState } from 'react'
import { memo } from 'react'
import { connect } from 'react-redux'
import { InputWhichCanBeChanged, optionInputWichChange } from '../../../const'
import { updateValueOfServer } from '../../../store/action/updateValuesOfServer'
import ChangeFieldsValueServer from './ChangeFieldsValueServer'

const ValuesOfServerWhichCanBeChanged = ({
  selectedServer,
  selectedInputWhichChangeValues,
  updateValueOfServer,
}) => {
  let inputWhichCanChangeValuesServer = Object.entries(
    InputWhichCanBeChanged,
  ).map((value, index) => {
    return (
      <div key={index}>
        <h2>{value[1]}:</h2>
        {selectedInputWhichChangeValues[0] === value[0] ||
        selectedInputWhichChangeValues[1] === value[0] ? (
          <ChangeFieldsValueServer value={value} index={index} />
        ) : (
          <h2
            onClick={() => {
              updateValueOfServer(index, value[0], optionInputWichChange[0])
            }}
          >
            {selectedServer[value[0]]}
          </h2>
        )}
      </div>
    )
  })

  return <div>{inputWhichCanChangeValuesServer}</div>
}

ValuesOfServerWhichCanBeChanged.propTypes = {
  selectedInputWhichChangeValues: PropTypes.array,
  selectedServer: PropTypes.object,
  updateValueOfServer: PropTypes.func,
}

const mapStateToProps = ({ serverListReducers }) => ({
  selectedServer: serverListReducers.selectedServer,
  selectedInputWhichChangeValues:
    serverListReducers.selectedInputWhichChangeValues,
})

const mapToDispatch = (dispatch) => ({
  updateValueOfServer: (id, type, option) =>
    dispatch(updateValueOfServer(id, type, option)),
})

export default memo(
  connect(mapStateToProps, mapToDispatch)(ValuesOfServerWhichCanBeChanged),
)
