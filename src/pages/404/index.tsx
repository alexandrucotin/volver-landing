import React, { useEffect } from "react";
import { Result, Button } from "antd";
import { motion } from "framer-motion";
import useLoadingStore from "../../core/store/loading.store";

const PageNotFound: React.FC = () => {
  const { setLoading } = useLoadingStore((store) => store);

  useEffect(() => {
    setLoading(false);
  }, [setLoading]);

  return (
    <motion.div
      className="page-not-found"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={
          <Button type="primary" href="/">
            Back Home
          </Button>
        }
      />
    </motion.div>
  );
};

export default PageNotFound;
