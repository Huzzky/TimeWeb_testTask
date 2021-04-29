import PropTypes from 'prop-types'
import { memo } from 'react'
import { connect } from 'react-redux'

const UserNameInViewSelectedServer = ({ selectedServer }) => {
  return (
    <div>
      <h2>User: </h2>
      <h2>{selectedServer.customer_id}</h2>
    </div>
  )
}

UserNameInViewSelectedServer.propTypes = {
  selectedServer: PropTypes.object,
}

const mapStateToProps = ({ serverListReducers }) => ({
  selectedServer: serverListReducers.selectedServer,
})

export default memo(
  connect(mapStateToProps, null)(UserNameInViewSelectedServer),
)
