import { useRecoilValue } from 'recoil'
import { jobAtom, messageAtom, networkAtom, notificationAtom } from './atoms'


function App() {
  const networkCount = useRecoilValue(networkAtom);
  const jobsCount = useRecoilValue(jobAtom);
  const messageCount = useRecoilValue(messageAtom);
  const notificationCount = useRecoilValue(notificationAtom);
  return (
    <div>
      <button>Home</button>
      
      <button>My Network({networkCount >= 100 ? "99+" : networkCount})</button>
      <button>Jobs({jobsCount})</button>
      <button>Messaging({messageCount})</button>
      <button>Notifications({notificationCount})</button>
      
      <button>Me</button>
    </div>
  )
}

export default App
