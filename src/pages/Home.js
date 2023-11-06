import { Link } from "react-router-dom";

const Home = () => {
    return (
        <>
        <header className="theme-light text-center-desktop text-center-mobile">

            <div className="container-text">
                <h1>Home page</h1>
            </div>

        </header>
            
            <section className="w-820px">
                <p>Welcome to the home page.</p>
                <p>This is a link to the <Link to="./products">Products</Link> page.</p>
                <p>This is a link to the <Link to="./contact">Contact</Link> page.</p>
            </section>
        </>
    );
}

export default Home;