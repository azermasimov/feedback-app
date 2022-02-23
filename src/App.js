import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import AboutPage from "./pages/AboutPage";
import AboutIconLink from "./components/AboutIconLink";
import Card from "./components/shared/Card";
import Post from "./components/Post";
import { FeedbackProvider } from "./components/context/FeedbackContext";

function App() {
    return (
        <FeedbackProvider>
            <Router>
                <Header />
                    <div className="container">
                        <Routes>
                            <Route 
                                path="/" 
                                element={
                                    <>
                                        <FeedbackForm />
                                        <FeedbackStats />
                                        <FeedbackList />
                                        <AboutIconLink />
                                    </>
                            } />
                            
                            <Route path="/about" element={<AboutPage />} />
                            <Route path="/post/*" element={<Post />} />
                        </Routes>
                        <Card>
                            <NavLink to="/" activeclassname="active">
                                Home
                            </NavLink>
                            <NavLink to="/about" activeclassname="active">
                                About
                            </NavLink>
                        </Card>
                    </div>
            </Router>
        </FeedbackProvider>
    );
}

export default App;