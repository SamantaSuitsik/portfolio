import "../styles/header.css"

export default function Header() {
    return (
        <div className="navbar">
            <a className="home" href="/">Home</a>

            <div className="links">
                <a className="link" href="/as">Blog</a>
                <a className="link" href="/about">About</a>
            </div>
        </div>
    );
}