import { React, useState } from "react";
import {
  useGetTreesByUsernameQuery,
  useGetLinksByUserIdQuery,
} from "../app/apiSlice";
import {
  AreaChart,
  Area,
  CartesianGrid,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const Analytics = () => {
  const { data: trees, isLoading: treesLoading } = useGetTreesByUsernameQuery();
  const { data: links, isLoading: linksLoading } = useGetLinksByUserIdQuery();

  if (linksLoading || treesLoading) {
    return <div></div>;
  }

  let data = [];
  let viewDict = {};

  for (let view of trees[0].views) {
    if (!viewDict[view]) {
      viewDict[view] = 1;
    } else {
      viewDict[view]++;
    }
  }

  for (let key of Object.keys(viewDict)) {
    data.push({
      date: key,
      uv: viewDict[key],
      amt: viewDict[key],
    });
  }

  let sum = 0;
  links.map((link) => {
    sum += link.counter;
  });

  let clicks = trees[0].views.length - 1;
  let CTR = 0;
  if (clicks == 0) {
    CTR = 0;
  } else {
    CTR = (sum / clicks) * 100;
  }

  return (
    <>
      <div>
        <div className="small-spacer m-4 p-1"></div>
        <div className="container text-center">
          <h1 className="p-2">Lifetime Analytics</h1>
          <div className="row">
            <div className="col">Views</div>
            <div className="col">Clicks</div>
            <div className="col">CTR</div>
          </div>
          <div className="row">
            <div className="col">{clicks}</div>
            <div className="col">{sum}</div>
            <div className="col">{CTR}%</div>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center mt-5">
        <div style={{ width: "70%", height: 300 }}>
          <ResponsiveContainer>
            <AreaChart
              data={data}
              margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis domain={["dataMin-0", "dataMax"]} />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="uv"
                stroke="#8884d8"
                fill="#8884d8"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <table className="table mt-5 w-75">
          <thead>
            <tr>
              <th></th>
              <th className="d-flex justify-content-end">Clicks</th>
            </tr>
          </thead>
          <tbody>
            {links.map((link) => {
              return (
                <tr key={link.link_id}>
                  <td>
                    <div>
                      <div className="row">
                        <div>{link.name}</div>
                      </div>
                    </div>
                  </td>
                  <td className="d-flex justify-content-end">{link.counter}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Analytics;
