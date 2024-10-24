import React from 'react';
import ResponseC from '@/app/components/ToolsMain/Response';

interface ResponseProps {
  responseDate: responseDateObject[];
  activeTool: string;
}
interface responseDateObject {
  content: string;
}

const Response: React.FC<ResponseProps> = ({ responseDate, activeTool }) => {
  return <ResponseC responseDate={responseDate} activeTool={activeTool} />;
};

export default Response;
