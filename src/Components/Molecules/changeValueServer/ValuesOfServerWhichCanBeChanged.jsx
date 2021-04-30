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
  console.log(selectedInputWhichChangeValues)
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
            {console.log(selectedServer[value[0]])}
            <LabelValuesServer labelText={selectedServer[value[0]]} />
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
  selectedServer: PropTypes.object,
}

const mapStateToProps = ({ serverListReducers }) => ({
  selectedServer: serverListReducers.selectedServer,
  selectedInputWhichChangeValues:
    serverListReducers.selectedInputWhichChangeValues,
})

export default connect(mapStateToProps)(ValuesOfServerWhichCanBeChanged)
