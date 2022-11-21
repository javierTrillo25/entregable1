import QuoteButton from "./QuoteButton";

const QuoteBox =({quote, getNewValues,BackObj, colorObj}) => {

return(
        <article className="quoteBox">
            <p style={colorObj}> {quote.quote} </p>
            <h3 style={colorObj}>{quote.author} </h3>
            <section className="quoteBox-footer">
            <QuoteButton getNewValues ={getNewValues} BackObj={BackObj}></QuoteButton>
            <i style={colorObj} className='bx bxs-quote-alt-left'></i>
            </section>
        </article>

)

}
export default QuoteBox