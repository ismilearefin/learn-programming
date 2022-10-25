import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Privatepage = () => {
    const mainData = useLoaderData();
    const {name,thum_img,card_dis} = mainData;
    return (
        <div className='h-screen grid items-center'>
            
            <div className="card lg:card-side bg-base-100 shadow-xl ">
        <figure><img src={thum_img} alt="Album"/></figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{card_dis}</p>
          <div className="card-actions justify-end">
          <label htmlFor="my-modal-3" className="btn btn-success modal-button">purchase</label>
          </div>
          <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
            <div className="modal-box relative">
                <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                <h3 className="text-lg font-bold">Congratulations random Internet user!</h3>
                <p className="py-4">Your purchase has been confirmed!!</p>
            </div>
            </div>
        </div>
      </div>
        </div>
    );
};

export default Privatepage;