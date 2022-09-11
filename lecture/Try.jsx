import React from "react";

const Try = ({ tryInfo }) => {

   return (
      <>
         <div>{tryInfo.try}</div>
         <div>{tryInfo.result}</div>
      </>
   )
}
export default Try;