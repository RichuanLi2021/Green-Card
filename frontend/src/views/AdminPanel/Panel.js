import React, { useState, useEffect } from 'react';
import createTheme from '@mui/material/styles/createTheme';
import './Panel.css';
import axios from "axios";
import Navigation from '../Navigation/navigation';
import FeedbackHandler from './feedback/AdminFeedbackHandler';
import { ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#96d2b0'
        }
    }
});

function Panel() {
    const [data, setData] = useState({});
    useEffect(() => {
        fetchData();
    }, []);

    const [isRegisterVisible, setIsRegisterVisible] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const fetchData = () => {
        axios
            .get("http://localhost:8887/api/login")
            .then((response) => {
                setData(response.data);
                // console.log(data);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const handleRegisterClick = () => {
        setIsRegisterVisible(!isRegisterVisible);
        console.log(data);
    };

    const handleRegisterSubmit = () => {
        // Send register data to server
        const userData = {
            username: username,
            password: password
        };

        axios.post("http://localhost:8887/api/register", userData)
            .then((response) => {
                console.log(response.data);
                fetchData();
                setIsRegisterVisible(false);
                alert("Register Successful!");
            })
            .catch((error) => {
                console.error(error); 
                alert("Error Occurred.");
            });
    };

    return (
        <ThemeProvider theme={theme}>
            <Navigation />
            <div className="panel">
                <h2>Admin Panel</h2>
                <FeedbackHandler />
            </div>
            <div className="register">
                <button className="btn-register" onClick={handleRegisterClick}>
                    User Register
                </button>
                {isRegisterVisible && (
                    <div className="register-area">
                        <input className='register-input'
                            type="text"
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <br />
                        <input className='register-input'
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <br />
                        <button className="btn-register" onClick={handleRegisterSubmit}>Register</button>
                    </div>
                )}
            </div>
        </ThemeProvider>
    )
}

export default Panel;