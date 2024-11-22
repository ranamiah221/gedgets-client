import React from 'react';

const SectionTitle = ({title, subTitle,icon}) => {
    return (
        <div>
            <div className='flex items-center gap-2'>
                <p className='w-10 h-10 rounded-full bg-pink-400 flex items-center justify-center text-white'>{icon}</p> <p className='text-xl font-medium text-pink-400'>{subTitle}</p>
            </div>
            <h1 className='text-4xl font-bold'>{title}</h1>
        </div>
    );
};

export default SectionTitle;