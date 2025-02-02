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
      className="h-full overflow-y-auto overflow-hidden p-4"
      style={{ overflow: 'hidden', overflowY: 'auto' }}
    >
      <div className="space-y-6">
        {responseDate.map((item, index) => (
          <div key={index} className=" bg-white z-10 p-4 border-b rounded-lg">
            <div>
              <div className="flex justify-between">
                <h1>{activeTool}</h1>
              </div>
              <div className="mt-2">
                <textarea
                  value={item.content}
                  className="w-full resize-none  border  rounded-md p-2"
                  disabled
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
