import './App.css';


function App(props) {
  let gallerystyle = {
    textAlign:"center"
  }

  let styleMyDiv = {
    display:"grid",
    gridTemplateColumns:"50% 45%",
    placeItems: "center",
    gap:"20px"
    
  }

  let data = props.props
  
  return(
    <>
    <h1 style={gallerystyle}>Kalvium Gallery</h1>
    <div style={styleMyDiv}>
      <img src={data[0].img} alt="" width={720}px/>
      <img src={data[1].img} alt="" width={720}px/>
      <img src={data[2].img} alt="" width={720}px/>
      <img src={data[3].img} alt="" width={720}px/>
    </div>
    </>
  )
}

export default App;
