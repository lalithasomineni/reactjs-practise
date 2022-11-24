import React from "react";

const menuCard = ({menuData}) => {

	console.log(menuData)
	return(
		<section className = "main-card--cointainer">
		<>
		{menuData.map((curelement)=>{

     const {id,category,name,description,image} = curelement

			return (
				<>
				 <div className = "card-container">
                     <div className = "card">
                        <div className = "card-body">
                             <span className = "card-number card-circle subtle">{id}</span>
                              <span className = "card-author subtle">{category}</span>
                              <h2 className = "card-tittle">{name}</h2>
                               <span className = "card-description">{description}</span>
                                 <div className = "card-read">Read</div>
                                 <img src = {image} alt = "failed" className = "card-media"/>
                                   

                   </div>
                    </div>
                      </div>
                      </>
                      )

                      })}





                 

    </>
    </section>

)

}



export default menuCard
