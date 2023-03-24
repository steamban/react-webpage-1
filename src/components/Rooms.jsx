import React from "react";

const Rooms = () => {
   return (
      <div className="max-w-[1400px] h-[500px] bg-blue-100 mx-auto my-20 pt-16 lg:mb-[20%] md:mb-[35%] px-4 grid lg:grid-cols-3 gap-4">
         <div className="lg:top-20 relative lg:col-span-1 col-span-2">
            <h3 className="text-2xl font-bold">Fine interior Rooms</h3>
            <p className="pt-4">
               Lorem ipsum dolor sit, amet consectetur adipisicing elit.
               Aspernatur fugiat autem sint, non aliquam dolore magni debitis
               veniam reiciendis optio.
            </p>
         </div>
         <div className="grid grid-cols-2 col-span-2 gap-2">
            <img className="object-cover w-full h-full" src="https://images.unsplash.com/photo-1505691938895-1758d7feb511?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="/" />
            <img className="object-cover w-full h-full row-span-2" src="https://images.unsplash.com/photo-1565182999561-18d7dc61c393?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="/" />
            <img className="object-cover w-full h-full" src="https://images.unsplash.com/photo-1493666835815-de6b83927e24?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1178&q=80" alt="/" />
         </div> row-span-2
      </div>
   );
};

export default Rooms;
