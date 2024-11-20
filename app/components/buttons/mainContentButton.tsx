import { Button } from 'antd';

const MainContentButton = (prop: any) => {
  const { setData, isSatisfy, isLoading } = prop;
  return (
    <div className="flex justify-center items-center">
      <Button
        loading={isLoading}
        disabled={!isSatisfy}
        type="primary"
        onClick={() => setData()}
      >
        Generate
      </Button>
    </div>
  );
};
export default MainContentButton;
