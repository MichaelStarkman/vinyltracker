import React from 'react'
import { Loader } from 'semantic-ui-react'

const Spinner = () => {
  return (
    <>
      <Loader 
        content='Loading' 
        active 
        inline='centered' 
        size='huge' 
        style={{ 
          border: "0px"
        }}/>
    </>
  );
};

export default Spinner