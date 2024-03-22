import logo from './logo.svg';
import { Component } from 'react';
import './App.css';
import CardList from './Components/card-list/card-list.component';
import SearchBox  from './Components/search-box/search-box.component';

class App extends Component {
  constructor(){
    super();
  this.state= {
    monster:[],
    searchValue:'',
  };
}
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=>response.json()).then((users)=> this.setState(()=>{
      return {monster:users}
    }) )

  
}
OnSearchChange=(event)=> 
{
  const searchValue=event.target.value.toLocaleLowerCase();
  
  
  this.setState(()=>{
  return {searchValue};
  })

}
 render(){
  const{monster ,searchValue}= this.state;
  const {OnSearchChange}= this;
  const filteredMonsters=monster.filter((monster)=>{
    return monster.name.toLocaleLowerCase().includes(searchValue);
  });
  return (
    <div className="App">
     
    {/* {
    //  filteredMonsters.map((monster)=>{
    //    return <h1 key={monster.id}>{monster.name}</h1>
    //})
  } */}
  <SearchBox className='monster-search-box' OnChangeHandler={OnSearchChange} placeholder='search'/>
  < CardList monsters={filteredMonsters}/>
    </div>
  );
 }
}

export default App;
