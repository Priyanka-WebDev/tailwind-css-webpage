
const Play = (props) => {
  return (
    <div>
      <div className=" p-9 text-black" >
        <div><img className="rounded-full" src={props.img} alt=""  height={50} width={50}/></div>
        <div className="text-xl mt-3 mb-3"><h1>{props.head}</h1></div>
        <div><p>{props.desc}</p></div>
      </div>
    </div>
  )
}

export default Play
