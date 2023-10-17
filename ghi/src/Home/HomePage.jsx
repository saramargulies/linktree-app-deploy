import LinkForm from './LinkForm'
import LinksPreview from './LinksPreview'


const HomePage = () => {


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