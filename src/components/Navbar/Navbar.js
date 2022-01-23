import { Tab, Tabs } from '@mui/material';
import React from 'react';

const Navbar = () => {
  return (
    <div className='h-[4rem] text-2xl'>
      <Tabs className='bg-[#9E95A4]'
        // value={}
        // onChange={}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
      >
        <Tab   value="one" label="Home"  />
        <Tab value="two" label="Doctor" />
        <Tab value="three" label="Faq" />
      </Tabs>
    </div>
  );
};

export default Navbar;
