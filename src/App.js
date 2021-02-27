import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const products = [
    {name : 'Adobe Photoshop', price : '$99.03'},
    {name : 'Adobe Illustrator', price : '$19.03'},
    {name : 'Adobe PDF Reader', price : '$08.03'},
    {name : 'Adobe PDF Reader', price : '$08.03'},
    {name : 'Adobe PDF Reader', price : '$08.03'},
    {name : 'Adobe PDF Reader', price : '$08.03'}
  ]
  const friends = ['Sourov','Tawhid','Ismail','Shakib']
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter></Counter>
        <Users></Users>
        <Number></Number>
        <ul>
          {
            friends.map(friend => <li>{friend}</li> )
          }
          {
            products.map(pd=> <li>{pd.name}</li> )
          }
        </ul>
        <h4>Product</h4>
        {
          products.map(pd=> <Product product={pd}></Product>)
        }
              <h1>Top Footballer</h1>
        
        <Person name="Leonal Messi" nationality="Argentine Footballer" thing="6 time Balon D'or winner"></Person>
        <Person name="Cristano Ronaldo" nationality="Portugese Footballer" thing="5 time Balon D'or winner"></Person>
        <Person name="Neymar jr" nationality="Brazillian Football" thing="nothing"></Person>
        <Person name="Kylean Mbappee" nationality="Franch Footballer" thing="no record. But 1 time world cup winner"></Person>
        <Person name="Robert Lewandoski" nationality="poland footballer" thing="no record"></Person>
        <h1>Favourite Actor For telengana</h1>
        <Person name ="Prabhas" famous="Famous through 'Baahubali'" ></Person>
        <Person name ="Allu Arjun" famous="Famous through 'Sarainudu'" ></Person>
      </header>
    </div>
  );
}
function Product(props){
  const design = {
    width : '200px',
    color : 'black',
    height : 'auto',
    borderRadius : '5px',
    backgroundColor : 'white',
    margin : '10px'
  }
  const {name, price} = props.product;
  return (
    <div style={design}>
      <h5>{name}</h5>
      <h6>{price}</h6>
      <button type="submit">Buy Now</button>
      <br/>
      <br/>
    </div>
  )
}

function Person(props){
  const makeUp = {
    width : '300px',
    border : '2px solid #61DAFB',
    margin: '5px',
    padding: '10px',
    borderRadius  : '5px'
  }

  return  (
  <div style={makeUp}>
    <h2>{props.name}</h2>
      <p>{props.nationality}</p>
      <p>{props.thing}</p>
      <p>{props.famous}</p>
    </div>
  )
}
function Counter(){
  const [count, setCount] = useState(10)
  return (
    <div>
      <h1>count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
    </div>
  )
}
function Number(){
  const [count, setCount] = useState(3)
  return (
    <div>
      <h2>Double : {count} </h2>
      <button onClick={()=> setCount(count * 2)}>makeDouble</button>
      <button onClick={() => setCount(count * 3)}>makeTriple</button>
      <button onClick={()=> setCount((count * 0) + 1)}>makeZero</button>
    </div>
  )
}
function Users(){
  const [users, setUsers] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data));
  }, [])

  return (
    <div>
        <h2>Dynamic User : {users.length}</h2>
        <ul>
          {
            users.map(user =>  <li>{user.name}</li> )
          }
        </ul>
    </div>
  )
}
export default App;
