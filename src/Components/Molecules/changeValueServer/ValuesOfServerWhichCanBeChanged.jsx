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
  let fieldDistribution = (value, index) => {
    return selectedInputWhichChangeValues[0] === value[0] ||
      selectedInputWhichChangeValues[1] === value[0] ? (
      <ChangeFieldsValueServer value={value} index={index} />
    ) : (
      <div className="value-server__btn-change">
        <LabelValuesServer
          className="value-server__value-which-change"
          labelText={selectedServer[0][value[0]]}
        />
        <BtnForChangeValueServer
          className="value-server__btn-for-change"
          value={value}
          index={index}
        />
      </div>
    )
  }

  let inputWhichCanChangeValuesServer = Object.entries(
    InputWhichCanBeChanged,
  ).map((value, index) => {
    return (
      <div className="selected-server__value-server value-server" key={index}>
        <LabelValuesServer
          className="value-server__value-denotes"
          labelText={value[1] + ':'}
        />
        {fieldDistribution(value, index)}
      </div>
    )
  })

  return (
    <div className="selected-server__inputs-for-change">
      {inputWhichCanChangeValuesServer}
    </div>
  )
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
