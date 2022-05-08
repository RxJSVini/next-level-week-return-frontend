import React from 'react';
import { Widget } from "./components/Widget";

const App:React.FC<{}> = ()=>{
  // React.useEffect(() =>{
  //   document.title='Sistema de FeedBacks';
  // }, []);

  return(
    <div className='flex gap-2'>
      <Widget/>
    </div>
  )
};

export { App };