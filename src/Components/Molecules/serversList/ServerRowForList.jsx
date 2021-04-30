import PropTypes from 'prop-types'
import { memo } from 'react'
import { connect } from 'react-redux'
import { selectionServerForView } from '../../../store/action/selectionServerForView'
import LabelValuesServer from '../../Atoms/LabelValuesServer'
import '../../../Assets/_serverList.scss'

const ServerRowForList = ({ serverList, selectServer }) => {
  let internalFuncSelectServer = (id) => {
    selectServer(id)
  }

  let rowWithServerNameForServersList = serverList.map((value, index) => {
    return (
      <div
        className="servers-list__servers-container"
        key={index}
        onClick={() => internalFuncSelectServer(index)}
      >
        <span className="servers-list__server-name">
          <LabelValuesServer labelText={value.server_name} />
        </span>
      </div>
    )
  })

  return <div className="servers-list">{rowWithServerNameForServersList}</div>
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
