import { React, useState } from "react";
import {
  useGetTreesByUsernameQuery,
  useGetLinksByUserIdQuery,
} from "../app/apiSlice";

const Analytics = () => {
  const { data: trees, isLoading: treesLoading } = useGetTreesByUsernameQuery();
  const { data: links, isLoading: linksLoading } = useGetLinksByUserIdQuery();
  console.log(trees, links);

  if (linksLoading || treesLoading) {
    return <div></div>;
  }

  let sum = 0;
  links.map((link) => {
    sum += link.counter;
  });

  return (
    <>
      <div>
        <div className="small-spacer"></div>
        <h1>Analytics</h1>
        <div className="container text-center">
          <div className="row">
            <div className="col">Views</div>
            <div className="col">Clicks</div>
            <div className="col">CTR</div>
          </div>
          <div className="row">
            <div className="col">{trees[0].views.length - 1}</div>
            <div className="col">{sum}</div>
            <div className="col">
              {(sum / (trees[0].views.length - 1)) * 100}%
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Analytics;
