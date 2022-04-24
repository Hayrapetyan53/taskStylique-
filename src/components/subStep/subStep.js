import "./subStep.css"

const Substep = (props)=>{

    const changeCheckBox = (name, subITemID)=>{
        const filteredArray = props.data.map(item => {
            if(item.name === name) {
                item?.sub_steps?.map(subItem => {
                    if(subItem.id === subITemID) {
                        if(props.isAvailable(name)) {
                            subItem.checkbox = !subItem.checkbox
                        }
                    }
                        if(props.handleCheck(item.sub_steps)?.length === 0) {
                            props.setCurrentState(prevValue => {
                                return {...prevValue, [name]: true}
                            })
                            return {...item, check: true}
                        } else {
                            props.setCurrentState(prevValue => {
                                return {...prevValue, [name]: false}
                            })
                        }
                    return subItem
                })
            }
            return item
        })
        props.setData(filteredArray)     
    }

    return(
        <div className="sub_steps">
            {props.item?.sub_steps?.map((subItem) =>
                <div className="sub_steps_1" key={subItem.id} onClick={() => changeCheckBox(props.item.name, subItem.id)} >
                    <input className="sub_steps_input" checked={subItem.checkbox} type="checkbox"/>
                    <p className="sub_steps_toDo">{subItem.toDo}</p>
                </div>
            )}
        </div>
        
    )
}

export default Substep