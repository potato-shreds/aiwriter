import Page from './page copy';
import { AntdRegistry } from '@ant-design/nextjs-registry';

const page = () => {
  return (
    <AntdRegistry>
      <Page />
    </AntdRegistry>
  );
};

export const metadata = {
  title: 'Active to Passive Voice Converter: Easily Transform Sentences Online',
  description:
    'Convert active sentences into passive voice effortlessly with Writer’s reliable Active to Passive Voice Converter. Enhance your writing with ease and accuracy.',
  keywords:
    'active to passive voice converter, sentence transformation, Writer, online writing tool, passive voice conversion',
};

export default page;
