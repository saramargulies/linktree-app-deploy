// import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { useGetLinksByUserIdQuery, useGetAccountQuery } from "../app/apiSlice";

const LinksPreview = () => {
  const { data: account, isLoading: accountLoading } = useGetAccountQuery();
  const { data: links, isLoading: linksLoading } = useGetLinksByUserIdQuery();

  if (linksLoading || accountLoading) {
    return <div></div>;
  }

  return (
    <>
      <div className="smartphone d-flex justify-content-center">
        <div className="pt-5 pb-5 overflow-scroll">
          <div className="d-flex justify-content-center">
            <h2>@{account.username}</h2>
          </div>
          <table className="table-fixed mt-5 justify-content-center">
            <tbody>
              {links.map((link) => {
                return (
                  <tr key={link.link_id}>
                    <td>
                      <div
                        className="card d-flex justify-content-center"
                        style={{
                          width: "16rem",
                        }}
                      >
                        <div className="row">
                          <div className="card-body d-flex justify-content-center">
                            <Link
                              className="link stretched-link"
                              to={link.link}
                              target="_blank"
                            >
                              {link.name}
                            </Link>
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="small-spacer"></div>
      </div>
    </>
  );
};

export default LinksPreview;
