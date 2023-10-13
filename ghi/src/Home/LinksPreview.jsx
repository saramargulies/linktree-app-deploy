// import React, { useEffect, useState } from "react";
import "react-router-dom";
import { useParams } from "react-router-dom";
import {
  useGetLinksByUserIdQuery,
  useGetAccountQuery,
  useGetTreesByUsernameQuery,
} from "../app/apiSlice";

const LinksPreview = () => {
  const { data: account, isLoading: accountLoading } = useGetAccountQuery();
  const { data: links, isLoading: linksLoading } = useGetLinksByUserIdQuery(
    account.username
  );
  const { data: trees, isLoading: treesLoading } = useGetTreesByUsernameQuery(
    account.username
  );
  console.log(trees, treesLoading);

  if (linksLoading && accountLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="page-container">
        <div className="small-spacer"></div>
        <h1>@{account.username}</h1>
        <div className="m-5">
          <table>
            <tbody>
              {links.map((link) => {
                return (
                  <tr key={link.id}>
                    <td>
                      <div className="card mb-3">
                        <div className="row g-0">
                          <div className="col-md-4 d-flex align-items-center card-title">
                            {link.name && <div>{link.name}</div>}
                          </div>
                          <div className="card-body">{link.link}</div>
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
