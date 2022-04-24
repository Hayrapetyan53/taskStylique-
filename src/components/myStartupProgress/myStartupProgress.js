import { useState } from "react"
import { useEffect } from "react"
import axios from "axios"
import progress from "../../data/myStartupProgress"
import Substep from "../subStep/subStep"
import "../myStartupProgress/myStartupProgress.css"


const MyStartupSrogress = ()=>{

    const baseURL = "https://uselessfacts.jsph.pl/random.json";

    const [data , setData] = useState(progress)
    const [currentState, setCurrentState] = useState({
        Foundation: false,
        Discovery: false,
        Delivery: false
    })
    const [post, setPost] = useState();

    useEffect(() => {
        axios.get(baseURL).then((response) => {
        setPost(response.data);
        });
    }, []);

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
            alert(post.text)
        }
    }, [currentState])

    return(
        <div className="container">
            <h1>My startup progress</h1>
            {data?.map((item) => {
                    return (
                            <div key={item.id}>
                                <div className="item">
                                    <p className="item_number">{item.number}</p>
                                    <h2 className="item_name">{item.name}</h2>
                                    {currentState.Foundation ? item.name === 'Foundation'  &&
                                     <p className="item_check">✓</p> : false}
                                    {currentState.Discovery ? item.name === 'Discovery'  &&
                                     <p className="item_check">✓</p> : false}
                                    {currentState.Delivery ? item.name === 'Delivery'  &&
                                     <p className="item_check">✓</p> : false}
                                </div>
                                <Substep currentState={currentState} setCurrentState={setCurrentState} 
                                handleCheck={handleCheck} isAvailable={isAvailable} 
                                data={data} setData={setData} item ={item} />
                            </div>
                            )
                        }) 
            }

        </div>
    )
}

export default MyStartupSrogress