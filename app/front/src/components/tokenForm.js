import React, { useState } from 'react';

function TokenForm() {
    const [token, setToken] = useState("");
    const [hasError, setHasError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");


    const handleTokenChange = (e) => {
        setToken(e.target.value);
        setHasError(false); // Reset error state when user changes input
    };

    const handleSubmit = async () => {
        // Making a POST request to the backend with the token
        try {
            const response = await fetch('https://api.voidvault.cloud', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ token: token })
            });
    
            const responseData = await response.json();
    
            if (responseData.success === false) {
                setHasError(true);
                setErrorMessage(responseData.message); // Display the error message from the backend
            } else {
                // Proceed to next form or whatever functionality you want
                console.log("Correct token");
            }
        } catch (error) {
            console.error('There was an error with the request:', error);
            setHasError(true);
            setErrorMessage("An unexpected error occurred."); // Default error message for other errors
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
            <p className="token-help">If you forgot your token, <a href="#" className="token-link">click here</a> to receive a new one.</p>
            <div className="button-container">
                <button className="submit" type="submit" onClick={handleSubmit}>Submit</button>
            </div>
        </div>
    );
    
}

export default TokenForm;
