import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function TokenForm() {
    const navigate = useNavigate();
    const [token, setToken] = useState("");
    const [hasError, setHasError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");


    const handleTokenChange = (e) => {
        setToken(e.target.value);
        setHasError(false); 
    };

    const handleSubmit = async () => {
        try {
            const response = await fetch('http://localhost:3001/verify-token', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ token: token }),
                credentials: 'include'
            });
        
            if (response.status === 200) {
                const responseData = await response.json();
                
                console.log("Correct token");
                    navigate('/config');
            } else {
                const responseData = await response.json();
                setHasError(true);
                setErrorMessage(responseData.message || 'Unexpected error');
            }
        } catch (error) {
            console.error('There was an error with the request:', error);
            setHasError(true);
            setErrorMessage("An unexpected error occurred.");
        }
    };

    return (
        <div className="center-container">
            <h2 className="token-prompt">Please enter your token to create or access your resources</h2>
            
            {hasError && <p className="error-message">{errorMessage}</p>} {/* Display error message when hasError is true */}
    
            <input 
                type="text" 
                className={`token-input ${hasError ? 'error' : ''}`} 
                placeholder="Enter your token" 
                onChange={handleTokenChange}
            />
            <p className="token-help">If you lost your token, <a href="#" className="token-link">click here</a> to receive a new one.</p>
            <div className="button-container">
                <button className="submit" type="submit" onClick={handleSubmit}>Submit</button>
            </div>
        </div>
    );
    
}

export default TokenForm;
