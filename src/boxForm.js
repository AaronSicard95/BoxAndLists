import {v4 as uuid} from 'uuid';
import { useRef, useState } from 'react';
import BoxList from './boxList';

function BoxForm(){
    const [boxes, setBoxes] = useState([]);
    const [formData, setFormData] = useState({width: 50, height:50, color: "black"});
    const stateRef = useRef();


    stateRef.current = boxes;

    const removeBox=  id=>{
        let newBoxes = stateRef.current.filter(b => b.id!==id);
        setBoxes(newBoxes);
    }

    const addBox = (box) =>{
        let newBoxes = [...boxes, {
        height: `${box.height}px`,
        width: `${box.width}px`,
        color: box.color,
        id: uuid(),
        remfunc: removeBox
    }]
        setBoxes(newBoxes);
        setFormData({width: 50, height:50, color: "black"});
    }

    const handleChange = (evt) =>{
        evt.preventDefault();
        const {name, value} = evt.target;
        setFormData(fData => ({
            ...fData,
            [name]: value
        }));
    }
    
    const handleSubmit = (evt) =>{
        evt.preventDefault();
        addBox(formData);
    }
    
    return <div>
        <form onSubmit={evt=>(handleSubmit(evt))} onChange={evt=>(handleChange(evt))}>
        <label htmlFor="width">Width:</label>
        <input name="width" type="number" value={formData.width}/>
        <label htmlFor="height">Height:</label>
        <input name="height" type="number" value={formData.height}/>
        <label htmlFor="color">Color:</label>
        <input name="color" type="test" value={formData.color}/>
        <button>Add!</button>
    </form>
    <BoxList boxes={boxes}></BoxList>
    </div>
}

export default BoxForm;