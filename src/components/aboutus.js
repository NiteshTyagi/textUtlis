import { Link } from "react-router-dom"

export default function Aboutus(){
    return (
        <div className="container">
            <div className="jumbotron">
                <h1 className="display-4">Hello, world!</h1>
                <p className="lead">I reached there with the help of react-router.</p>
                <hr className="my-4" />
                <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                <p className="lead">
                    <Link className="btn btn-primary btn-lg" to="/" role="button">Learn more</Link>
                </p>
            </div>
        </div>
    )
}