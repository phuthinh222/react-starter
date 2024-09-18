// () => {}
// component = HTML + CSS + JS
// JSX : 1 parent => fragment

import './style.css';

const MyComponent = () => {

  const name = "thinh" // string
  const age = 25 // number
  const check = true // boolean
  const number = [1,2,3]
  const info = {
    name: "Thinh",
    age: 22
  }

    return (
      <>
        <div className='child'>My name is {name}</div>
        <div style={ {backgroundColor : "blue"} }>Age: {age}</div>
        <div>{check}</div>
        <div>{number}</div>
        <div>Information {JSON.stringify(info)}</div>
        <div>{console.log("Hello 123")}</div>
      </>
    )
}

export default MyComponent;