import { Link } from "react-router-dom"


const Footer = () => {
    return (
        <div>
            <div className="mt-10 rounded-md">
                <footer className="footer bg-base-200 text-base-content p-10">
                    <aside>
                        <Link to="/"><h3 className="text-2xl font-bold text-red-600">LearnSphere</h3></Link>

                        <p className="font-semibold">
                            Start Learning Today, <br />Shape Your Tomorrow
                            <br />
                            <address>23/7, South lane, Motijheel, Dhaka</address>
                        </p>
                    </aside>
                    <nav>
                        <h6 className="footer-title">Cotact Details</h6>
                            <p>Email: learn.sphere@gmail.com</p>
                            <p>Phone: +8801*****77</p>
                            <p>Fax:  +1-212-555-1234</p>
                    </nav>
                    <nav>
                        <h6 className="footer-title">Social Links</h6>
                        <a className="link no-underline hover:text-red-600">Facebook</a>
                        <a className="link no-underline hover:text-red-600">Instagram</a>
                        <a className="link no-underline hover:text-red-600">Udemy</a>
                        <a className="link no-underline hover:text-red-600">Youtube</a>
                    </nav>
                    <nav>
                        <h6 className="footer-title">Legal</h6>
                        <a className="link no-underline hover:text-red-600">Terms of use</a>
                        <a className="link no-underline hover:text-red-600">Privacy policy</a>
                        <a className="link no-underline hover:text-red-600">Cookie policy</a>
                    </nav>
                </footer>
            </div>
        </div>
    )
}

export default Footer
