import Page from './page copy';

export const metadata = {
  title: 'Draft & Reply to Emails 10x Faster with Writer',
  description:
    "Type // to quickly draft and reply to emails, boosting your productivity. Review and send effortlessly with Writer's efficient email tool!",
  keywords:
    'email drafting tool, fast email replies, Writer, productivity boost, quick email response',
};

import { AntdRegistry } from '@ant-design/nextjs-registry';

const page = () => {
  return (
    <AntdRegistry>
      <Page />
    </AntdRegistry>
  );
};
export default page;
