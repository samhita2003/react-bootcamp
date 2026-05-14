import './App.css'
import Footer from './Footer'
import MainSection from './MainSection'
import Navbar from './Navbar'

function App() {
  

  return (
   <>
   <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <MainSection />
      <Footer />
    </div>
   </>
  )
}

export default App
