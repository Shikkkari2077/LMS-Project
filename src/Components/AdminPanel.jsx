import {React, useState} from 'react'
import './AdminPanel.css'
import Icofont from 'react-icofont';
import {
    BrowserRouter as Router,
    HashRouter,
    Route,
    Routes,
    Link,
    useLocation,
  } from "react-router-dom";
import Home from './navComps/Home'
import Course from './navComps/Course'
import CourseLibrary from './navComps/CourseLiabrary'
import Report from './navComps/Report'
import Users from './navComps/Users'
import Branches from './navComps/Branches'
import Category from './navComps/Category'
import UserType from './navComps/UserType'
import UserGroups from './navComps/UserGroups'
import CourseBundles from './navComps/CourseBundles'
import EventManager from './navComps/EventManager'
import Files from './navComps/Files'
import Settings from './navComps/Settings'

const AdminPanel = () => {
    const [minimize, setMinimize] = useState(false)


    const handleClick = () => { 
        setMinimize(!minimize)
      };
    

    return (
    <HashRouter>
        <div className='adminContainer'>
           <div className={minimize?"sideNav MinimizeSideNav":"sideNav"}>
               <div className="head">
                    <div className='hlogo'>
                        <img src="/image/book.svg" alt="" />
                    </div>
                     <div className={minimize?'htitle displayNone':'htitle'}>Admin</div>
               </div>
               <ul>
                   <li><Link className='navlink' to='/home'><div><img className="sideNavIcon" src="/image/Home.svg" alt="" /></div>{minimize?null:(<span>Home</span>)}</Link></li>
                   <li><Link className='navlink' to='/home/course'><div><img className="sideNavIcon" src="/image/Course.svg" alt="" /></div>{minimize?null:(<span>Courses</span>)}</Link></li>
                   <li><Link className='navlink' to='/home/courselibrary'><div><img className="sideNavIcon" src="/image/Library.svg" alt="" /></div>{minimize?null:(<span>Course Library</span>)}</Link></li>
                   <li><Link className='navlink' to='/home/report'><div><img className="sideNavIcon" src="/image/Report.svg" alt="" /></div>{minimize?null:(<span>Report</span>)}</Link></li>
                   <li><Link className='navlink' to='/home/users'><div><img className="sideNavIcon" src="/image/Users.svg" alt="" /></div>{minimize?null:(<span>Users</span>)}</Link></li>
                   <li><Link className='navlink' to='/home/branches'><div><img className="sideNavIcon" src="/image/Branch.svg" alt="" /></div>{minimize?null:(<span>Branches</span>)}</Link></li>
                   <li><Link className='navlink' to='/home/category'><div><img className="sideNavIcon" src="/image/Category.svg" alt="" /></div>{minimize?null:(<span>Category</span>)}</Link></li>
                   <li><Link className='navlink' to='/home/userstype'><div><img className="sideNavIcon" src="/image/Usertype.svg" alt="" /></div>{minimize?null:(<span>Users Type</span>)}</Link></li>
                   <li><Link className='navlink' to='/home/usergroups'><div><img className="sideNavIcon" src="/image/Group.svg" alt="" /></div>{minimize?null:(<span>User Groups</span>)}</Link></li>
                   <li><Link className='navlink' to='/home/coursebundles'><div><img className="sideNavIcon" src="/image/Bundle.svg" alt="" /></div>{minimize?null:(<span>Course Bundles</span>)}</Link></li>
                   <li><Link className='navlink' to='/home/eventmanager'><div><img className="sideNavIcon" src="/image/Event.svg" alt="" /></div>{minimize?null:(<span>Event Manager</span>)}</Link></li>
                   <li><Link className='navlink' to='/home/files'><div><img className="sideNavIcon" src="/image/Files.svg" alt="" /></div>{minimize?null:(<span>Files</span>)}</Link></li>
                   <li><Link className='navlink' to='/home/settings'><div><img className="sideNavIcon" src="/image/Setting.svg" alt="" /></div>{minimize?null:(<span>Settings</span>)}</Link></li>
               </ul>
           </div>
           <div className="rightContainer">
               <nav className="navbar">
                    <div className='minimize' onClick={handleClick}><img className={minimize?'mini Amini':'mini'} src="/image/next.svg" alt="" /></div>
                    <div className="first">
                       <div className="search">
                            <img className='navIcons' src="/image/Search.svg" alt="" />
                            <input type="text" placeholder='Search for Anything' />
                       </div>
                       <div className="admnistrator">
                           <img className='navIcons' src="/image/admin.svg" alt="" />
                           <span>Administrator</span>
                           <img className='navIcons' src="/image/Drop.svg" alt="" />
                       </div>
                       <div className="myProfile">
                            <img className='navIcons' src="/image/Profile.svg" alt="" />
                            <span>My Profile</span>
                            <img className='navIcons' src="/image/Drop.svg" alt="" />
                       </div>
                   </div>
                   <div className="second">
                       <div className="message"><img className='navIcons' src="/image/Message.svg" alt="" /></div>
                       <div className="bell"><img className='navIcons' src="/image/Bell.svg" alt="" /></div>
                       <div className="heart"><img className='navIcons' src="/image/Heart.svg" alt="" /></div>
                       <div className="cart"><img className='navIcons' src="/image/Cart.svg" alt="" /></div>
                       <div className="userProfile">J</div>
                   </div>
               </nav>
               <div className="mainData">
                    <Routes>
                        <Route exact path="/home" element={<Home/>} />
                        <Route exact path="/home/course" element={<Course/>} />
                        <Route exact path="/home/courselibrary" element={<CourseLibrary/>} />
                        <Route exact path="/home/report" element={<Report/>} />
                        <Route exact path="/home/users" element={<Users/>} />
                        <Route exact path="/home/branches" element={<Branches/>} />
                        <Route exact path="/home/category" element={<Category/>} />
                        <Route exact path="/home/userstype" element={<UserType/>} />
                        <Route exact path="/home/usergroups" element={<UserGroups/>} />
                        <Route exact path="/home/coursebundles" element={<CourseBundles/>} />
                        <Route exact path="/home/eventmanager" element={<EventManager/>} />
                        <Route exact path="/home/files" element={<Files/>} />
                        <Route exact path="/home/settings" element={<Settings/>} />
                    </Routes>
               </div>
           </div>
        </div>
    </HashRouter>
    )
}

export default AdminPanel
