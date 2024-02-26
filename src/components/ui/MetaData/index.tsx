import { memo, FC } from "react";
import { Helmet } from "react-helmet";

type MetaDataProps = {
  title: string;
};

const MetaData: FC<MetaDataProps> = ({ title }) => {
  return (
    <Helmet>
      <title>{`${title} | Blog App`}</title>
    </Helmet>
  );
};

export default memo(MetaData);
