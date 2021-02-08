import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

import Button from '../Button';

import './App.scss';

function App() {
  
  library.add(fas);

  return (
    <div className="App">
      <section className="presentation">
        <h1>Buttons</h1>
        <div className="row">
          <div className="col">
            <pre>{'<Button/>'}</pre>
            <Button>Default</Button>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <pre>{`<Button variant='outline'/>`}</pre>
            <Button variant='outline'>Default</Button>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <pre>{`<Button variant='text'/>`}</pre>
            <Button variant='text'>Default</Button>
          </div>
        </div>
        
        <div className="row">
          <div className="col">
            <pre>{`<Button disableShadow/>`}</pre>
            <Button disableShadow>Default</Button>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <pre>{`<Button disabled/>`}</pre>
            <Button disabled>Default</Button>
          </div>
          <div className="col">
            <pre>{`<Button variant='text' disabled/>`}</pre>
            <Button variant='text' disabled>Default</Button>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <pre>{`<Button startIcon='cart-plus'/>`}</pre>
            <Button startIcon='cart-plus'>Default</Button>
          </div>
          <div className="col">
            <pre>{`<Button endIcon='cart-plus' />`}</pre>
            <Button endIcon='cart-plus'>Default</Button>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <pre>{`<Button size='sm'/>`}</pre>
            <Button size='sm'>Default</Button>
          </div>
          <div className="col">
            <pre>{`<Button size='md' />`}</pre>
            <Button size='md'>Default</Button>
          </div>
          <div className="col">
            <pre>{`<Button size='lg' />`}</pre>
            <Button size='lg'>Default</Button>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <pre>{`<Button color='default'/>`}</pre>
            <Button color='default'>Default</Button>
          </div>
          <div className="col">
            <pre>{`<Button color='primary' />`}</pre>
            <Button color='primary'>Default</Button>
          </div>
          <div className="col">
            <pre>{`<Button color='secondary' />`}</pre>
            <Button color='secondary'>Default</Button>
          </div>
          <div className="col">
            <pre>{`<Button color='danger' />`}</pre>
            <Button color='danger'>Default</Button>
          </div>
        </div>
      </section>      
    </div>
  );
}

export default App;
