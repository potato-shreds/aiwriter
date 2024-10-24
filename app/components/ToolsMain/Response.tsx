import React from 'react';

interface ResponseProps {
  responseDate: responseDateObject[];
  activeTool: string;
}
interface responseDateObject {
  content: string;
}

const Response: React.FC<ResponseProps> = ({ responseDate, activeTool }) => {
  return (
    <div
      className="h-full  py-4 pr-6 overflow-y-auto rounded-[1.5rem]"
      style={{ overflow: 'hidden', overflowY: 'auto' }}
    >
      <div className="space-y-6">
        {responseDate.map((item, index) => (
          <div key={index} className=" bg-white z-10 p-4 border-b rounded-2xl">
            <div>
              <div className="flex justify-between">
                <h1>{activeTool}</h1>
              </div>
              <div className="mt-2">
                <textarea
                  value={item.content}
                  className="w-full resize-none  border rounded-md p-2"
                  disabled
                  rows={10}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Response;
