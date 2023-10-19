import { useEffect } from "react";
import "react-router-dom";
import { useParams, Link } from "react-router-dom";
import { useGetLinksByUsernameQuery, useIncrementCounterMutation, useUpdateTreeMutation, useGetAccountQuery } from "../app/apiSlice";

const LinkyByUsername = () => {
  console.log("rerender")
    let { username } = useParams()

  const { data: links, isLoading: linksLoading } = useGetLinksByUsernameQuery(username);
  const { data: account, isLoading: accountLoading } = useGetAccountQuery()
  const [updateLink] = useIncrementCounterMutation()
  const [updateTree] = useUpdateTreeMutation()


  useEffect(() => {
    if (account == null || account.username != username){
    updateTree({username})
    }
  }, [account])

  if (linksLoading && accountLoading) {
    return <div></div>
  }
  if (!links){
    return (
    <div className="d-flex justify-content-center m-5">
        Uh-oh! That user does not exist
    </div>
    )
  }


  

  const updateCounter = (link_id, newCount) => {
    let counter = newCount + 1
    updateLink({ link_id, counter })
  }

  return (
    <>
        <div className="d-flex justify-content-center mb-5 pb-5">
        <div className="m-5 pt-5 ">
          <div className="d-flex justify-content-center">
          <h2>@{username}</h2>
          </div>
          <table className="mt-5 justify-content-center">
            <tbody>
              {links.map((link) => {
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
                                  onClick={() => {updateCounter(link.link_id, link.counter )}}
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
