const QuoteButton = ({getNewValues,BackObj}) => {

    return(
        <button onClick={getNewValues} style={BackObj}>
            
            <i className='bx bx-refresh'></i>
            </button>

    )
}
export default QuoteButton