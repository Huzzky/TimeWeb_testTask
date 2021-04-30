import PropTypes from 'prop-types'
import { memo } from 'react'
import { connect } from 'react-redux'
import { InputWhichCanBeChanged } from '../../../const'
import ChangeFieldsValueServer from './ChangeFieldsValueServer'
import LabelValuesServer from '../../Atoms/LabelValuesServer'
import BtnForChangeValueServer from '../../Atoms/BtnForChangeValueServer'

const ValuesOfServerWhichCanBeChanged = ({
  selectedServer,
  selectedInputWhichChangeValues,
}) => {
  let inputWhichCanChangeValuesServer = Object.entries(
    InputWhichCanBeChanged,
  ).map((value, index) => {
    return (
      <div key={index}>
        <LabelValuesServer labelText={value[1]} />
        {selectedInputWhichChangeValues[0] === value[0] ||
        selectedInputWhichChangeValues[1] === value[0] ? (
          <ChangeFieldsValueServer value={value} index={index} />
        ) : (
          <div>
            <LabelValuesServer labelText={selectedServer[0][value[0]]} />
            <BtnForChangeValueServer value={value} index={index} />
          </div>
        )}
      </div>
    )
  })

  return <div>{inputWhichCanChangeValuesServer}</div>
}

ValuesOfServerWhichCanBeChanged.propTypes = {
  selectedInputWhichChangeValues: PropTypes.array,
  selectedServer: PropTypes.array,
}

const mapStateToProps = ({ serverListReducers }) => ({
  selectedServer: serverListReducers.selectedServer,
  selectedInputWhichChangeValues:
    serverListReducers.selectedInputWhichChangeValues,
})

export default memo(connect(mapStateToProps)(ValuesOfServerWhichCanBeChanged))
