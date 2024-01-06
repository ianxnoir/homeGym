
import React from 'react';
import ReactLoading from 'react-loading';


export function LoadingSpinner(
    // props:{
    //    showLoading:boolean
       
      
    // }
){

    return(

        <div
        style={{ width: "100%", height: "100",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
      
      >
        <ReactLoading type="spinningBubbles" color="white" height={'10%'} width={'10%'} />
    </div>


      
    )
}