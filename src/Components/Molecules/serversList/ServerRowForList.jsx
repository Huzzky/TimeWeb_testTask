import PropTypes from 'prop-types'
import { memo } from 'react'
import { connect } from 'react-redux'
import { selectionServerForView } from '../../../store/action/selectionServerForView'

const ServerRowForList = ({ serverList, selectServer }) => {
  let internalFuncSelectServer = (id) => {
    selectServer(id)
  }
  let rowWithServerNameForServersList = serverList.map((value, index) => {
    return (
      <div key={index} onClick={() => internalFuncSelectServer(index)}>
        <h1>{value.server_name}</h1>
      </div>
    )
  })
  return <>{rowWithServerNameForServersList}</>
}

ServerRowForList.propTypes = {
  serverList: PropTypes.array,
}

const mapStateToProps = ({ serverListReducers }) => ({
  serverList: serverListReducers.serverList,
})

const mapToDispatch = (dispatch) => ({
  selectServer: (selectedServer) =>
    dispatch(selectionServerForView(selectedServer)),
})

export default memo(connect(mapStateToProps, mapToDispatch)(ServerRowForList))
