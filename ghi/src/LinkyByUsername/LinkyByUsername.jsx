import React from "react";
import "react-router-dom";
import { useParams, Link } from "react-router-dom";
import { useGetLinksByUsernameQuery } from "../app/apiSlice";

const LinkyByUsername = () => {
    let { username } = useParams()

  const { data: links, isLoading: linksLoading } = useGetLinksByUsernameQuery(username);
  console.log(links)

  if (linksLoading) {
    return <div></div>
  }
  if (!links){
    return (
    <div className="d-flex justify-content-center m-5">
        Uh-oh! That user does not exist
    </div>
    )
  }

  return (
    <>
        <div className="d-flex justify-content-center">
        <div className="m-5 pt-5 ">
          <div className="d-flex justify-content-center">
          <h2>@{username}</h2>
          </div>
          <table className="mt-5 justify-content-center">
            <tbody>
              {links.map((link) => {
                console.log(link)
                return (
                  <tr key={link.link_id}>
                    <td>
                      <div className="card d-flex justify-content-center" style={{
                        width: "30rem"
                      }}>
                        <div className="row">
                          <div className="card-body d-flex justify-content-center">
                          <Link
                                  className="link stretched-link"
                                  to={link.link}
                                  target="_blank"
                                >
                                  {link.name}
                          </Link></div>
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

export default LinkyByUsername;
