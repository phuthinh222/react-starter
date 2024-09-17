import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// () => {}
// component = HTML + CSS + JS
const MyComponent = () => {
  return (
    <div>Thinh update</div>
  )
}

const App = () => {

  const myFunction = () => {
    console.log("hello world")
  }

  myFunction()

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Hello World</h1>
      <MyComponent/>
    </>
  )
}

export default App
