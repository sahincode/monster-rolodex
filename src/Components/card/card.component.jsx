import { Component  } from "react";
import './card.styles.css';

class  Card extends Component{
render(){
    const {id,name ,email}=this.props.monster;
    return(
      
        <div className='card-list'>
            
        
            <div className='card-container'>
                <img alt={`monsters ${name}`} src={`https://robohash.org/${monster.id}?set=set2&size=150x150`}/>
            <h1 key={id}>
                {name}
            </h1>
            </div>
      
          </div>
    )
}
}
export default Card ;