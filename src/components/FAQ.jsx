import { useState } from "react";
import { PlusIcon, MinusIcon } from "@heroicons/react/outline";

const FAQ = () => {
  const [expanded, setExpanded] = useState(Array(3).fill(false));

  const toggleAccordion = (index) => {
    const updatedExpanded = [...expanded];
    updatedExpanded[index] = !updatedExpanded[index];
    setExpanded(updatedExpanded);
  };

  return (
    <>
      <div className="mt-20 text-3xl font-semibold tracking-wide leading-8 text-violet-700 max-md:mt-10 text-center">
        Frequently asked questions
      </div>

      <div className="flex flex-col mt-7 max-w-full bg-purple-50 rounded-lg w-[846px] max-md:px-5">
        <div className="flex items-center justify-between p-6">
          <div className="text-2xl font-medium leading-7 text-violet-700 max-md:max-w-full">
            Lorem ipsum dolor sit amet consectetur. Leo at sit eu libero?
          </div>
          <button onClick={() => toggleAccordion(0)}>
            {expanded[0] ? (
              <MinusIcon className="h-6 w-6 text-purple-700 cursor-pointer" />
            ) : (
              <PlusIcon className="h-6 w-6 text-purple-700 cursor-pointer" />
            )}
          </button>
        </div>
        {expanded[0] && (
          <div className="text-lg leading-8 text-slate-500 max-md:max-w-full p-6">
            Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id
            ipsum. Elementum ultrices nulla faucibus odio est sed aliquam.
            Sapien massa morbi risus sagittis tortor integer.
          </div>
        )}
      </div>

      <div className="flex flex-col mt-4 max-w-full bg-purple-50 rounded-lg w-[846px] max-md:px-5">
        <div className="flex items-center justify-between p-6">
          <div className="text-2xl font-medium leading-7 text-violet-700 max-md:max-w-full">
            Lorem ipsum dolor sit amet consectetur. Leo at sit eu libero?
          </div>
          <button onClick={() => toggleAccordion(1)}>
            {expanded[1] ? (
              <MinusIcon className="h-6 w-6 text-purple-700 cursor-pointer" />
            ) : (
              <PlusIcon className="h-6 w-6 text-purple-700 cursor-pointer" />
            )}
          </button>
        </div>
        {expanded[1] && (
          <div className="text-lg leading-8 text-slate-500 max-md:max-w-full p-6">
            Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id
            ipsum. Elementum ultrices nulla faucibus odio est sed aliquam.
            Sapien massa morbi risus sagittis tortor integer.
          </div>
        )}
      </div>

      <div className="flex flex-col mt-4 max-w-full bg-purple-50 rounded-lg w-[846px] max-md:px-5">
        <div className="flex items-center justify-between p-6">
          <div className="text-2xl font-medium leading-7 text-violet-700 max-md:max-w-full">
            Lorem ipsum dolor sit amet consectetur. Leo at sit eu libero?
          </div>
          <button onClick={() => toggleAccordion(2)}>
            {expanded[2] ? (
              <MinusIcon className="h-6 w-6 text-purple-700 cursor-pointer" />
            ) : (
              <PlusIcon className="h-6 w-6 text-purple-700 cursor-pointer" />
            )}
          </button>
        </div>
        {expanded[2] && (
          <div className="text-lg leading-8 text-slate-500 max-md:max-w-full p-6">
            Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id
            ipsum. Elementum ultrices nulla faucibus odio est sed aliquam.
            Sapien massa morbi risus sagittis tortor integer.
          </div>
        )}
      </div>
    </>
  );
};

export default FAQ;
