import React from 'react';

const HelloWorld = (props) => {
  return (
    <div className="h-[100vh] px-6 bg-[#0e0e10] w-full flex flex-col items-center justify-center">
      <div className="text-white ">
        <h1 className="text-4xl font-bold mb-8">NextJS / Tailwind / SASS Boilerplate </h1>
        <h1 className="text-2xl font-medium">Hello world, happy hacking!</h1>
        <img className="w-full  mt-20" src="https://media.giphy.com/media/ule4vhcY1xEKQ/giphy.gif" />
      </div>
    </div>
  );
};

export default HelloWorld;
