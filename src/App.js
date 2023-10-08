import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { useState } from 'react'
import Alert from './components/Alert';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)
  const showAlert = (msg, type) => {
    setAlert(
      { msg, type }
    )
    setTimeout(() => {
      setAlert(null)
    }, 2400);
  }
  // Go to video 20 in harry bhaiya's website and understand the code as I have not wriiten that part of code coz I was feeling lazy
  const toggleMode = (class_) => {
    if (mode === 'light') {
      setMode('dark')
      showAlert('Dark mode enabled', 'Success')
      // document.title='jfshr9iwui'
    } else {
      setMode('light')
      showAlert('Light mode enabled', 'Success')
    }
  }
  return (
    <Router>
      <Navbar title='Check' mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container">
        <Routes>
          {/* /users --> Component 1
                /users/profile --> component 2 */}
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/" element={<TextForm heading="Enter text to analyze" mode={mode} showAlert={showAlert} />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
