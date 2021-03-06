import {Routes, Route, BrowserRouter, Link} from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import {Container, Navbar} from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap";

function App() {
    return (
        <BrowserRouter>
            <div className="d-flex flex-column site-container">
                <header>
                    <Navbar bg="dark" variant="dark">
                        <Container>
                            <LinkContainer to="/">
                                <Navbar.Brand>Amazona</Navbar.Brand>
                            </LinkContainer>
                        </Container>
                    </Navbar>
                </header>
                <main>
                    <Container>
                        <Routes> {/* The Switch decides which component to show based on the current URL.*/}
                            <Route path='/' element={<HomeScreen/>}/>
                            <Route path="/product/:slug" element={<ProductScreen/>}/>
                        </Routes>
                    </Container>
                </main>
                <footer>
                    <div className="text-center">All rights reserved</div>
                </footer>
            </div>
        </BrowserRouter>
    );
}

export default App;
