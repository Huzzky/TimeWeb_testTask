import PropTypes from 'prop-types'
import { memo } from 'react'
import { connect } from 'react-redux'
import LabelValues from '../../Atoms/LabelValuesServer'

const UserNameInViewSelectedServer = ({ selectedServer }) => {
  return (
    <div className="selected-server__user-name">
      <LabelValues
        className="selected-server__user-label"
        labelText={'User: '}
      />
      <LabelValues
        className="selected-server__user-label"
        labelText={selectedServer[0].customer_id}
      />
    </div>
  )
}

UserNameInViewSelectedServer.propTypes = {
  selectedServer: PropTypes.array,
}

const mapStateToProps = ({ serverListReducers }) => ({
  selectedServer: serverListReducers.selectedServer,
})

export default memo(
  connect(mapStateToProps, null)(UserNameInViewSelectedServer),
)
