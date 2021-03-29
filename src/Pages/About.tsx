

export default function About() {
    return (
        <div className="about">
            <div className="about-content">
                <h1>~ About Me ~</h1>
                <br />
                <br />
                <h3>
                    Hello! My name is Yunus İNAN. Someone who wants to be Web Developer
                </h3>
                <br />
                <br />
                <h4>
                    These are the links to follow me, see my other projects and reaching
                    me.
                </h4>
                <div className="socialLinks">
                    <a href="https://github.com/Ynsinan" target="_blank" rel="noreferrer">
                        <i className="fab fa-github-square fa-2x" style={{ color: "white" }}></i>
                         Github
                    </a>
                    <a href="https://www.linkedin.com/in/yunusinan/" target="_blank" rel="noreferrer">
                        <i className="fab fa-linkedin fa-2x" style={{ color: "white" }}></i>
                         LinkedIn
                    </a>
                    <a href="mailto: yns.inan1660@gmail.com" target="_blank" rel="noreferrer">
                        <i className="fas fa-envelope-square fa-2x" style={{ color: "white" }}></i>
                        Email
                    </a>
                </div>
            </div>
        </div>
    );

}
