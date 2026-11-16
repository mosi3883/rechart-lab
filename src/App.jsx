import Step1 from './Step1';
import Step2 from './Step2';

function App() {
  return (
    <div>
      <div>
        <h1>Step 1</h1>
        <div style={{ padding: '30px', border: '1px solid red' }}>
          <Step1 />
        </div>
      </div>
      <div>
        <h1>Step 2</h1>
        <div style={{ padding: '30px', border: '1px solid red' }}>
          <Step2 />
        </div>
      </div>
    </div>
  );
}

export default App;
