import { Spinner } from "@heroui/react";

const loading = () => {
  return (
    <div className="h-[85vh] flex flex-col gap-5 items-center justify-center">
      <Spinner size="lg" />
    </div>
  );
};

export default loading;
