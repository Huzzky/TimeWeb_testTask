import PropTypes from 'prop-types'
import { memo } from 'react'
import { connect } from 'react-redux'
import LabelValues from '../../Atoms/LabelValuesServer'

const UserNameInViewSelectedServer = ({ selectedServer }) => {
  return (
    <div>
      <LabelValues labelText={'User: '} />
      <LabelValues labelText={selectedServer.customer_id} />
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
