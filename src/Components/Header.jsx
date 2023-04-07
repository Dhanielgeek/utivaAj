import React, { useState } from 'react'
import './HeaderStyle.module.css'
import classes from './HeaderStyle.module.css'
import GlobalButton from './GlobalButton'
import { BiMenuAltRight } from 'react-icons/bi'
import { MdClear }    from 'react-icons/md'

const Header = () => {


const [toggle, setToggle] = useState(true)

const handleToggle = ()=>{
    setToggle(!toggle)
}




  return (
    <nav className={classes.navBar}>
        <div className={classes.hold_navigation}>
          
            <div className={classes.logo}>
                <div className={classes.firstIconHold}>
                {
                 toggle ? (<div onClick={handleToggle}>
                   <BiMenuAltRight style={{
                    fontSize : "40px",
                    cursor: "pointer",
                    color: "blue"
                    }}/>
                    </div>) : (<div onClick={handleToggle}>
                    <MdClear style={{
                    fontSize : "40px",
                    cursor: "pointer",
                    color: "blue"
                 }}/>
                    </div>)
                }
                </div>
                <span>Utiva</span>
            </div>
            <div className={classes.navlinks}>
                <div className={classes.nav_link}>School</div>
                <div className={classes.nav_link}>Enterprises</div>
                <div className={classes.nav_link}>Company</div>
            </div>
            <div className={classes.mybtn}>
                <GlobalButton>
                    sign up
                </GlobalButton>
                <GlobalButton outline= "true" varient= "primary">
                    login
                </GlobalButton>
            </div>
            <div className={classes.iconholder}>
             {
                toggle ? (<div onClick={handleToggle}>
                   <BiMenuAltRight style={{
                    fontSize : "40px",
                    cursor: "pointer",
                    color: "blue"
                }}/>
                </div>) : (<div onClick={handleToggle}>
                <MdClear style={{
                    fontSize : "40px",
                    cursor: "pointer",
                    color: "blue"
                }}/>
                </div>)
             }
            </div>
        </div>
    </nav>
  )
}

export default Header