import Button1 from './components/example-1-normal-css/Button';
import Button2 from './components/example-2-inline-css/Button';
import Button3 from './components/example-3-styled-components/Button';
import Button4 from './components/example-4-css-modules/Button';
import Button from './components/example-5-sass/Button';

import './App.css';
// Later on, we'll import button components here

const App = () => {
  return (
    <div className="App">
      <Button1 buttonText="Example 1"/>
      <Button2 buttonText="Example 2"/>
      <Button3 buttonText="Example 3"/>
      <Button4 buttonText="Example 4"/>
      <Button buttonText={"Example 5"}/>
    </div>
  );
};

export default App;
