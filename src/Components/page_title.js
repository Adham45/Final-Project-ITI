
export default function Page_title (props){
    return (
        <div className="page_title">
            <div className="page_title_info">
                <h2> {props.title} </h2>
                <p> {props.description} </p>
            </div>
        </div>
    );
}