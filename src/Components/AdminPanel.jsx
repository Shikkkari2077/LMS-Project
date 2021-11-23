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
                     <div className={minimize?'htitle displayNone':'htitle'}>Admin</div>
               </div>
               <ul>
                   <li><div><img className="sideNavIcon" src="/image/home.svg" alt="" /></div>{minimize?null:(<span>Home</span>)}</li>
                   <li><div><img className="sideNavIcon" src="/image/course.svg" alt="" /></div>{minimize?null:(<span>Courses</span>)}</li>
                   <li><div><img className="sideNavIcon" src="/image/library.svg" alt="" /></div>{minimize?null:(<span>Course Library</span>)}</li>
                   <li><div><img className="sideNavIcon" src="/image/report.svg" alt="" /></div>{minimize?null:(<span>Report</span>)}</li>
                   <li><div><img className="sideNavIcon" src="/image/users.svg" alt="" /></div>{minimize?null:(<span>Users</span>)}</li>
                   <li><div><img className="sideNavIcon" src="/image/branch.svg" alt="" /></div>{minimize?null:(<span>Branches</span>)}</li>
                   <li><div><img className="sideNavIcon" src="/image/category.svg" alt="" /></div>{minimize?null:(<span>Category</span>)}</li>
                   <li><div><img className="sideNavIcon" src="/image/usertype.svg" alt="" /></div>{minimize?null:(<span>Users Type</span>)}</li>
                   <li><div><img className="sideNavIcon" src="/image/group.svg" alt="" /></div>{minimize?null:(<span>User Groups</span>)}</li>
                   <li><div><img className="sideNavIcon" src="/image/bundle.svg" alt="" /></div>{minimize?null:(<span>Course Bundles</span>)}</li>
                   <li><div><img className="sideNavIcon" src="/image/event.svg" alt="" /></div>{minimize?null:(<span>Event Manager</span>)}</li>
                   <li><div><img className="sideNavIcon" src="/image/files.svg" alt="" /></div>{minimize?null:(<span>Files</span>)}</li>
                   <li><div><img className="sideNavIcon" src="/image/setting.svg" alt="" /></div>{minimize?null:(<span>Settings</span>)}</li>
               </ul>
           </div>
           <div className="rightContainer">
               <nav className="navbar">
                    <div className='minimize' onClick={handleClick}><Icofont icon={minimize?'icofont-ui-next':"icofont-ui-previous"} size="1"/></div>
                    <div className="first">
                       <div className="search">
                            <img className='navIcons' src="/image/search.svg" alt="" />
                            <input type="text" placeholder='Search for Anything' />
                       </div>
                       <div className="admnistrator">
                           <img className='navIcons' src="/image/admin.svg" alt="" />
                           <span>Administrator</span>
                           <img className='navIcons' src="/image/drop.svg" alt="" />
                       </div>
                       <div className="myProfile">
                            <img className='navIcons' src="/image/profile.svg" alt="" />
                            <span>My Profile</span>
                            <img className='navIcons' src="/image/drop.svg" alt="" />
                       </div>
                   </div>
                   <div className="second">
                       <div className="message"><img className='navIcons' src="/image/message.svg" alt="" /></div>
                       <div className="bell"><img className='navIcons' src="/image/bell.svg" alt="" /></div>
                       <div className="heart"><img className='navIcons' src="/image/heart.svg" alt="" /></div>
                       <div className="cart"><img className='navIcons' src="/image/cart.svg" alt="" /></div>
                       <div className="userProfile">J</div>
                   </div>
               </nav>
           </div>
        </div>
    )
}

export default AdminPanel
