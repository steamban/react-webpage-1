import React from 'react';

const Plan = () => {
    return ( 
        <div className='max-w-[1400px] m-auto py-16 px-4 grid lg:grid-cols-2 gap-4'>
            <div className='grid grid-cols-2 grid-rows-6 h-[80vh]'>
                <img className='row-span-3 object-cover w-full h-full p-2' src="https://images.unsplash.com/photo-1679572125292-d01c28de06ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="/" />
                <img className='row-span-2 object-cover w-full h-full p-2' src="https://images.unsplash.com/photo-1679597454493-d86b77bdf2fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="/" />
                <img className='row-span-2 object-cover w-full h-full p-2' src="https://plus.unsplash.com/premium_photo-1661918387460-aaa22e20d4d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="/" />
                <img className='row-span-3 object-cover w-full h-full p-2' src="https://images.unsplash.com/photo-1679599767344-d28d47771cdd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="/" />
                <img className='row-span-3 object-cover w-full h-full p-2' src="https://images.unsplash.com/photo-1679512598221-3454804a8bd1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="/" />
            </div>
            <div className='flex flex-col h-full justify-center'>
                <h3 className='text-5xl md:text-6xl font-bold'>Plan your next trip</h3>
                <p className='text-2xl py-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, provident.</p>
                <p className='pb-6'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias ratione soluta veritatis nam voluptatem reprehenderit, dolore neque velit et libero.</p>
            <div>
                <button className='border border-black text-black hover:shadow-xl mr-4'>Learn More</button>
                <button className='border bg-black text-white hover:shadow-xl'>Book Your Trip</button>
            </div>
            </div>
        </div>
     );
}
 
export default Plan;