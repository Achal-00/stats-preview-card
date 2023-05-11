import './Main.css'
function Main () {
    return (
            <main className="container">
                <section className='right-side'>
                    <div class="main">
                        <div class="overlay"></div>
                    </div>
                </section>
                <section className="left-side">
                    <h1>Get <span>insights</span> that help your business grow.</h1>
                    <p>Discover the benefits of data analytics and make better decisions regarding revenue, customer experience and overall efficiency</p>
                    <div className="achievements">
                        <div className="companies">
                            <h3>10k+</h3>
                            <h5>COMPANIES</h5>
                        </div>
                        <div className="templates">
                            <h3>314</h3>
                            <h5>TEMPLATES</h5>
                        </div>
                        <div className="queries">
                            <h3>12M+</h3>
                            <h5>QUERIES</h5>
                        </div>
                    </div>
                </section>
            </main>
    )
}
export default Main