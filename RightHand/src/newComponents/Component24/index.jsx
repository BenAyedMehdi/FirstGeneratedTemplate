import React from "react";

import { Button, Img, Text, List } from "components";
import BlogPageColumnactive from "components/BlogPageColumnactive";

const Component24 = () => {
  return (
    <>
      <div className="flex flex-col font-manrope items-start justify-start md:px-10 sm:px-5 px-[120px] w-full">
        <div className="flex flex-col gap-10 items-start justify-start max-w-[1200px] mx-auto w-full">
          <Text
            className="text-4xl sm:text-[32px] md:text-[34px] text-gray-900 tracking-[-0.72px] w-full"
            size="txtManropeExtraBold36"
          >
            Recent News
          </Text>
          <List
            className="sm:flex-col flex-row gap-6 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-start w-full"
            orientation="horizontal"
          >
            {new Array(3).fill({}).map((props, index) => (
              <React.Fragment key={`BlogPageColumnactive${index}`}>
                <BlogPageColumnactive
                  className="flex flex-1 flex-col gap-6 items-start justify-start w-full"
                  {...props}
                />
              </React.Fragment>
            ))}
          </List>
        </div>
      </div>
    </>
  );
};

export default Component24;
