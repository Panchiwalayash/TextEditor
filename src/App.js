import Navbar from './components/Navbar';
import Textform from './components/Textform';
import { useState } from 'react';
import Alert from './components/Alert';


function App() {
  const [mode, setMode] = useState('light')
  const [but, setbut] = useState('enable darkmode')
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  function toggleMode() {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = 'black';
      setbut('Enable darkmode')
      showAlert("dark mode has been enable", "success")
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white';
      setbut('disable darkmode')
      showAlert("dark mode has been disable", "success")
    }
  }
  return (
    <>
        <Navbar title="Text Editor " mode={mode} toggleMode={toggleMode} but={but}></Navbar>
        <Alert alert={alert}></Alert>
        <div className="container my-2">
              <Textform heading="Enter the text below" mode={mode} ></Textform>
        </div>
    </>
  );
}

export default App;
