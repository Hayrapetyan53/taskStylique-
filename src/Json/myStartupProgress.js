import { v4 as uuidv4 } from 'uuid';


 const progress = [
    {
        id:uuidv4(),
        number:'1',
        name:'Foundation',
        check:false,
        
        sub_steps:[
            {
            id:uuidv4(),
            checkbox:false,
            toDo:'Setup virtual office'
            },
            {
            id:uuidv4(),    
            checkbox:false,
            toDo:'Set mission & vision'
            },
            {
            id:uuidv4(),
            checkbox:false,
            toDo:'Select business name'
            },
            {
            id:uuidv4(),
            checkbox:false,
            toDo:'Buy domains'
            }]
        
    },
    {
        id:uuidv4(),
        number:'2',
        name:'Discovery',
        check:false,
        sub_steps:[
            {
            id:uuidv4(),
            checkbox:false,
            toDo:'Create roadmap'
            },
            {
            id:uuidv4(),    
            checkbox:false,
            toDo:'Competitor analysis'
            }
        ]    
    },
    {
        id:uuidv4(),
        number:'3',
        name:'Delivery',
        check:false,
        sub_steps:[
            {
            id:uuidv4(),
            checkbox:false,
            toDo:'Release marketing website'
            },
            {
            id:uuidv4(),    
            checkbox:false,
            toDo:'Release MVP'
            }
        ]    
    }
]

export default progress