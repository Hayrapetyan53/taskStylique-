import progress from "../../Json/myStartupProgress"
import { useState } from "react"
import { useEffect } from "react"




const MyStartupSrogress = ()=>{

    const [data , setData] = useState(progress)
    const [currentState, setCurrentState] = useState({
        Foundation: false,
        Discovery: false,
        Delivery: false
    })

    const handleCheck = (arr) => {
        return arr.filter(item => !item.checkbox)
    }

    const isAvailable = (name) => {
        if(name === 'Foundation') {
            return true
        }
        else if(name === 'Discovery' && currentState.Foundation) {
            return true
        } else if(name === 'Delivery' && currentState.Discovery) {
            return true
        }
        return false
    }

    useEffect(() => {
        if(currentState.Delivery && currentState.Discovery && currentState.Foundation) {
            alert('Compleeeeeeeeeeeeeete')
        }
    }, [currentState])

    const changeCheckBox = (name, subITemID)=>{
        const filteredArray = data.map(item => {
            if(item.name === name) {
                item?.sub_steps?.map(subItem => {
                    if(subItem.id === subITemID) {
                        if(isAvailable(name)) {
                            subItem.checkbox = !subItem.checkbox
                        }
                    }
                        if(handleCheck(item.sub_steps)?.length === 0) {
                            setCurrentState(prevValue => {
                                return {...prevValue, [name]: true}
                            })
                            return {...item, check: true}
                        } else {
                            setCurrentState(prevValue => {
                                return {...prevValue, [name]: false}
                            })
                        }
                    return subItem
                })
            }
            return item
        })
        setData(filteredArray)     
    }

    return(
        <div>
            {data?.map((item) => {
                    return (
                        <div key={item.id}>
                            <div>
                                <p>{item.number}</p>
                                <h3>{item.name}</h3>
                            </div>
                            {item?.sub_steps?.map((subItem) =>
                                    <div key={subItem.id} onClick={() => changeCheckBox(item.name, subItem.id)} >
                                       <input checked={subItem.checkbox} type="checkbox"/>
                                       <p>{subItem.toDo}</p>
                                    </div>
                             )
                            }
                        </div>)
                })
            }

        </div>

    )
}

export default MyStartupSrogress