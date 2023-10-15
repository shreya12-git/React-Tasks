import './Card.css';
import Output from './Output';
function Card(props){
 return(
    <div className='card'>
       <Output  output={props.outputValue}></Output>
    </div>
 );
}
export default Card;