const Cards = (props) => {
   const  {cards}=props
  const { randon } = props
  
    return (
        cards.map(cards => {
            return(
        <div value={false}   key={cards.id} className='cards'>
          <img  onClick={randon} src={cards.img} alt='card' />
          <span>
            <strong>{cards.id}</strong>
          </span>
        </div>
            )
        })
    )
}
export default Cards