import PropTypes from 'prop-types'
import { memo } from 'react'
import { connect } from 'react-redux'
import LabelValues from '../../Atoms/LabelValuesServer'

const UserNameInViewSelectedServer = ({ selectedServer }) => {
  return (
    <div>
      <LabelValues labelText={'User: '} />
      <LabelValues labelText={selectedServer[0].customer_id} />
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
