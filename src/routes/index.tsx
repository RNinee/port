import { createFileRoute } from '@tanstack/react-router'
import NavBar from '../components/NavBar'

export const Route = createFileRoute('/')({ component: App })

function App() {
  return (
    <div>
      <NavBar />
    </div>
  );
}
