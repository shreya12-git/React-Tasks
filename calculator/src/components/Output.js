import './Output';
function Output(props) {
    return(
        <div className='output-screen'>
            <input type='text' readOnly value={props.value}></input>
        </div>
    );
}
export default Output;