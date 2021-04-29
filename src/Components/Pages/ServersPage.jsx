import ViewSelectedServer from '../Molecules/changeValueServer/ViewSelectedServer'
import ServerListContainer from '../Molecules/serversList/ServersListContainer'

export const ServersPage = () => {
  return (
    <div>
      <ServerListContainer />
      <ViewSelectedServer />
    </div>
  )
}
