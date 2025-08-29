import { Link } from "react-router-dom";
import { FaChevronLeft } from "react-icons/fa";
import "./NotFound.css";

export default function NotFound() {
    return (
        <div className="notfound-container">
            <h1 className="notfound-title">404</h1>
            <p className="notfound-subtitle">Page Not Found</p>
            <p className="notfound-message">The page you are looking for does not exist.</p>

            <Link to="/" className="notfound-link">
                <FaChevronLeft className="notfound-icon" />
                <span>Return</span>
            </Link>
        </div>
    );
}
