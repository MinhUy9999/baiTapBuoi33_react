import Shoeitem from "./Shoeitem"


const ListShoe = ({listShoe, addShoeCart}) => {
  // console.log(props)
  return (
    <div className="list_shoe grid grid-cols-3 gap-5">
          {listShoe.map((shoe, index) =>{
            return <Shoeitem addShoeCart={addShoeCart} shoe={shoe} key={index}/>
          })}
        </div>
  )
}

export default ListShoe
