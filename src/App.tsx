import React from 'react';
import { Router } from "./routes";

const App:React.FC<{}> = ()=>{
  // React.useEffect(() =>{
  //   document.title='Sistema de FeedBacks';
  // }, []);

  return(
    <div className='flex gap-2'>
      <Router/>
    </div>
  )
};

export { App };