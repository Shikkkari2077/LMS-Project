import {React, useState} from 'react'
import './AdminPanel.css'
import Icofont from 'react-icofont';

const AdminPanel = () => {
    const [minimize, setMinimize] = useState(false)


    const handleClick = () => {
        setMinimize(!minimize)
      };
    

    return (
        <div className='adminContainer'>
           <div className={minimize?"sideNav MinimizeSideNav":"sideNav"}>
               <div className="head">
                    <div className={minimize?'hlogo Minihlogo':'hlogo'}> <Icofont icon="book" rotate="270" flip="h" size="3"/></div>
                    {minimize?null:(<div className='htitle'>Admin</div>)}
                    <div className={minimize?'minimize Aminimize':'minimize'} onClick={handleClick}><Icofont icon="icofont-ui-previous" size="1"/></div>
               </div>
               <ul>
                   <li><div></div>{minimize?null:(<span>Home</span>)}</li>
                   <li><div></div>{minimize?null:(<span>Courses</span>)}</li>
                   <li><div></div>{minimize?null:(<span>Course Library</span>)}</li>
                   <li><div></div>{minimize?null:(<span>Report</span>)}</li>
                   <li><div></div>{minimize?null:(<span>Users</span>)}</li>
                   <li><div></div>{minimize?null:(<span>Branches</span>)}</li>
                   <li><div></div>{minimize?null:(<span>Category</span>)}</li>
                   <li><div></div>{minimize?null:(<span>Users Type</span>)}</li>
                   <li><div></div>{minimize?null:(<span>User Groups</span>)}</li>
                   <li><div></div>{minimize?null:(<span>Course Bundles</span>)}</li>
                   <li><div></div>{minimize?null:(<span>Event Manager</span>)}</li>
                   <li><div></div>{minimize?null:(<span>Files</span>)}</li>
                   <li><div></div>{minimize?null:(<span>Settings</span>)}</li>
               </ul>
           </div>
           <div className="rightContainer"></div>
        </div>
    )
}

export default AdminPanel
