import React, { Suspense } from 'react'
// FIXME: if you use an import() somewhere in this file
// it will trigger an auto-injection of this import too
// which will raise an error
import {
  __federation_method_setRemote,
  __federation_method_getRemote
} from '__federation__'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const RemoteButton = React.lazy(() => {
    __federation_method_setRemote('myRemote', {
      url: 'http://localhost:3001/assets/remoteEntry.js',
      format: 'esm'
    })
    return __federation_method_getRemote('myRemote', './Button')
  })

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <Suspense>
          <RemoteButton />
        </Suspense>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
