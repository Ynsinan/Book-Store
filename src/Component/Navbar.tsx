import { Link } from "react-router-dom";


const Navbar = () => {
    return (
        <div className="navbar">
            <div className="left-nav">
                <Link to="/"><h2><i className="fas fa-book"></i>Book Store</h2></Link>
            </div>
            <div className="right-nav">
                <Link to="/" ><button className="home">Home</button></Link>
                <Link to="/about" ><button className="about-me">About Me</button></Link>

            </div>
        </div>
    );
}

export default Navbar;