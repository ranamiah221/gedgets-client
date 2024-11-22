import React from 'react';

const SectionTwo = ({description, buttonText, buttonIcon}) => {
    return (
        <div>
            <p className='text-base font-medium text-pink-900 mb-3'>{description}</p>
           
            <button className='btn bg-pink-700 text-white border-0'><span>{buttonIcon}</span> {buttonText}</button>
          
        </div>
    );
};

export default SectionTwo;