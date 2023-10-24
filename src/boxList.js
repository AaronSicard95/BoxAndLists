function BoxList(props){
    let boxes = props.boxes;
    return <div style={{display: "inline"}}>
        {boxes.map(b =>(<div style={{display: "inline", justifyContent:"center"}} key={b.id}><div style={{width: b.width, height: b.height, backgroundColor: b.color, display: "inline-block"}}></div><button style={{display: "inline", fontSize: "10px"}} onClick={evt=>b.remfunc(b.id)}>X</button></div>))}
    </div>
    
}

export default BoxList;