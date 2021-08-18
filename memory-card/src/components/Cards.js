const Cards = (props) => {
   const  {cards}=props
    const { randon } = props
    const {con}=props
    return (
        cards.map(cards => {
            return(
        <div value={false}  key={cards.id} className='cards'>
          <img src={cards.img} />
          <span>
            <strong>{cards.id}</strong>
          </span>
        </div>
            )
        })
    )
}
export default Cards