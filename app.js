import React from 'react';
import ReactDOM from 'react-dom';

function Button(props) {
  let { action, title } = props;
  return <button onClick={action}>{title}</button>;
}

function App() {
  const [count, setCount] = React.useState(0);

  let incrementCount = () => {
    setCount(count + 1);
  };

  let decrementCount = () => {
    setCount(count - 1);
  };

  let resetCount = () => {
    setCount(0);
  };

  return (
    <div className="app">
              <p>Count: {count}</p>
              
      <div className="buttons">
                  
        <Button title={'Decrement'} action={decrementCount} />
                  
        <Button title={'Increment'} action={incrementCount} />
                  
        <Button title={'Reset'} action={resetCount} />
                
      </div>
            
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
