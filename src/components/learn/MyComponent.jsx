// () => {}
// component = HTML + CSS + JS
// JSX : 1 parent => fragment

import './style.css';

const MyComponent = () => {
    return (
      <>
        <div className='child'>My name is Thinh</div>
        <div style={ {backgroundColor : "blue"} }>Age: 22</div>
      </>
    )
}

export default MyComponent;