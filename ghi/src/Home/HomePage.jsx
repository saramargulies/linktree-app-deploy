import LinkForm from "./LinkForm";
import LinksPreview from "./LinksPreview";
import { useGetAccountQuery, useGetLinksByUserIdQuery } from "../app/apiSlice";
import EditLinkCard from "./EditLinkCard";

const HomePage = () => {
  const { data: account } = useGetAccountQuery();
  const { data: links, isLoading: linksLoading } = useGetLinksByUserIdQuery();

  if (!account) {
    return <div>Please Log in!</div>;
  }
  if (linksLoading) {
    return <div></div>;
  }

  return (
    <div className="m-5 d-flex flex-row justify-content-around">
      <div className="flex-grow">
        <div className="flex-grow-1 row">
          <LinkForm></LinkForm>
        </div>
        <div className="row pt-4">
          {links?.map((link) => {
            return (
              <div className="d-flex justify-content-center pe-4" key={link.link_id}>
                <EditLinkCard linkToEdit={link}></EditLinkCard>
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <div className="flex-fill ">
          <LinksPreview></LinksPreview>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
