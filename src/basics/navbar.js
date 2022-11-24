import React from 'react'

const Navbar = ({filter,menuList}) => {
   return(
   <>
   <nav className = "navbar">
         <div className = "btn-group">
         {
            menuList.map((curelement)=>{
               return (
                  <button className = "btn-group__item" onClick = {() => filter(curelement)}>{curelement}</button>
                  )
            })
         }
         </div>
       </nav>
   </>
   )
}

export default Navbar