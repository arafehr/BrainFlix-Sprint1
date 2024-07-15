import './App.scss'
import { Navbar } from './components/Navbar/Navbar'
import VideoInfoLayout from './components/VideoInfoLayout/VideoInfoLayout'
import VideoPlayer from './components/VideoPlayer/VideoPlayer'

function App() {
  return (
    <>
      <Navbar />
      <VideoPlayer />
      <VideoInfoLayout />
    </>
  )
}

export default App
