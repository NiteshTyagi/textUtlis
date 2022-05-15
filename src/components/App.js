import Navbar from "./Navbar";
import Textarea from "./Form";
import Alert from "./alert";
import { useState } from "react";
import { 
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Aboutus from './aboutus';

const App = () => {

    const [alert, setAlert] = useState(null);

    const showAlert = (message, type) => {
        setAlert({
            message: message,
            type : type
        })
        setTimeout(() => {
            setAlert(null);
        }, 1500);
    }

    return (
        <>
            <Router>
                <Navbar />
                <Alert alert={alert} />
                <>
                    <Routes>
                        <Route path="/" element={<Textarea heading="Try TextUtils - word counter, character counter, remove extra spaces" rows={5} showAlert={showAlert} />} />
                        <Route path="/about" element={<Aboutus />} />
                    </Routes>
                </>
            </Router>
        </>
    )
}

export default App;