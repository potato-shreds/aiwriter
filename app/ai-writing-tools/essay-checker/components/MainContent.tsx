import React from 'react';

interface responseDateObject {
  content: string;
}
interface MainContentProps {
  setResponseDate: React.Dispatch<React.SetStateAction<responseDateObject[]>>;
}

const MainContent: React.FC<MainContentProps> = ({ setResponseDate }) => {
  return (
    <div className="p-4 pl-0 pr-6 h-full ">
      <div className="flex flex-col justify-between h-full p-4  bg-white rounded-2xl shadow-xl">
        <div>
          <div className="flex">
            <h1>Essay Checker</h1>
          </div>
          <div className="flex flex-col p-2 mt-2">
            <h1>Essay to Check</h1>
            <textarea
              className="w-90 py-2 px-4 rounded-md border border-gray-200 mt-2"
              placeholder="Enter or paste the essay that needs to be checked"
              rows={5}
            ></textarea>
          </div>
        </div>

        <div className="flex justify-end items-center mb-4">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
            onClick={() => {
              setResponseDate([{ content: 'sad' }]);
            }}
          >
            Generate
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
