import './App.css';
import Characters from './components/Characters';


function App() {

  return <div>
    <Characters
      name={'BART'}
      desk={'Lormhdbchdbchecbhecbnhjecnejncej'}
      picture={'https://static.simpsonswiki.com/images/thumb/6/65/Bart_Simpson.png/200px-Bart_Simpson.png'}
    />
    <Characters
    name='Hamer'
    desk='njfnvjfdnvfjknvjkfdvndjkfnvjdkndjndjnjnkldmkvdmkmvdmvdkkdkj'
    picture='http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
    />
  </div>

}

export default App;


{/* <div>
  <h2>Homer</h2>
  <p>Loren ipsum</p>
  <img src="http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png" alt='' />
</div> */}