import React, { useEffect, useState } from 'react';
import Doctor from '../Doctor/Doctor';

const Doctors = () => {
  const [doctors,setDoctors]=useState([]);
  useEffect( ()=>{
    fetch('doctor.json')
    .then(res=> res.json())
    .then( data=> setDoctors(data))
  },[])
  return (
    <div className='grid grid-cols-4 gap-2 p-3 '>
      {
        doctors.map(doctor=> <Doctor
          doctor={doctor}
          key={doctor.id}
        >

        </Doctor>)
      }
    </div>
  );
};

export default Doctors;
