import LinkForm from './LinkForm'
import LinksPreview from './LinksPreview'
import {
    useGetAccountQuery,
  } from "../app/apiSlice";


const HomePage = () => {

    const { data: account, isLoading } = useGetAccountQuery();

    if (!account){
        return <div>Please Log in!</div>
      }

    return (
        <div className="m-5 d-flex flex-row justify-content-around">
            <div className="flex-grow-1">
                <LinkForm></LinkForm>
            </div>
            <div className="flex-fill">
                <LinksPreview></LinksPreview>
            </div>
        </div>
    )
}

export default HomePage