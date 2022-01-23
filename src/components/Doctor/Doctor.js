import { Button } from '@mui/material';
// import AddIcCallOutlinedIcon from '@mui/icons-material/AddIcCallOutlined';
import React from 'react';

const Doctor = (props) => {
  const { name, image, possiton,phone}=props.doctor;
  return (
    <div>
      <div className='border-double border-4 m-6 bg-slate-200 p-2 border-red-600 rounded-lg cursor-pointer '>
        <img className='h-96 w-full' src={image} alt='doctor' ></img>
        <h1 className='	text-3xl text-center text-black	'>  {name}</h1>
        <h2 className='text-center font-serif text-2xl text-[#7826AC]'>  {possiton}</h2>
        <h1 className='text-2xl text-pink-500 text-center p-2'> {phone}</h1>
        <span className='p-1 ml-2'>
          <Button variant="contained" color="warning">
            Get Appointmnet
          </Button>
        </span>
        <span className='p-1'>
          <Button variant="contained" color="error">
            Suggetion
          </Button>
        </span>
     </div>
    </div>
  );
};

export default Doctor;
