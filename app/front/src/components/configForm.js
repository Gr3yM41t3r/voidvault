import  React ,{ useState } from 'react';

function ConfigForm() {

    const [formData, setFormData] = useState({
        cpu: '1',
        ram: '1Gib',
        storage: '',
        gpu: 'None',
        image: 'Ubuntu Server 22.04',
        username: '',
        password: '',
        confirmPassword: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        // Ensure passwords match
        if (formData.password !== formData.confirmPassword) {
            alert("Passwords don't match");
            return;
        }

        try {
            const response = await fetch('http://localhost:3001/config', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData),
                credentials: 'include'

            });
            const data = await response.json();
            console.log(data);
            // Handle response data or redirect or any other post-submit logic
        } catch (error) {
            console.error("Error submitting form:", error);
        }
    };






  return (
    <div className="center-container">
    <form onSubmit={handleSubmit}>
        <table>
            <tr>
                <td>
                    <label>CPU:</label>
                </td>
                <td>
                <select id="cpu" name="cpu"  defaultValue="1" value={formData.cpu} onChange={handleChange} required>
                        <option value="1" selected>1</option>
                        <option value="2" >2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                    </select>
                </td>
            </tr>
            <tr>
                <td>
                    <label >RAM:</label>
                </td>
                <td>
                <select id="ram" name="ram" defaultValue="1GiB" value={formData.ram} onChange={handleChange} required>
                        <option value="1GiB" selected>1GiB</option>
                        <option value="2GiB">2GiB</option>
                        <option value="4GiB">4GiB</option>
                        <option value="8GiB">8GiB</option>
                        <option value="16GiB">16GiB</option>
                        <option value="32GiB">32GiB</option>
                            
                    </select>
                </td>
            
            </tr>
            <tr>
                <td>
                    <label >Storage</label>
                </td>
                <td>
                <input type="storage" id="storage" name="storage" value={formData.storage} onChange={handleChange} placeholder='20GiB, min: 10 GiB, max 60 GiB'   required />

                </td>
            </tr>

            <tr>
                <td>
                    <label >GPU:</label>
                </td>
                <td>
                <select id="gpu" name="gpu"  value={formData.gpu} onChange={handleChange}>
                        <option value="option1" disabled>1x TESLA K80 12 GB</option>
                        <option value="option1" disabled>2x TESLA K80 12 GB</option>
                        <option value="option1" disabled>1x TESLA M40 24 GB</option>
                    </select>
                </td>
            </tr>

            <tr>
                <td>
                    <label>Image</label>
                </td>
                <td>
                    <select id="image" name="image"  defaultValue="Ubuntu Server 22.04" value={formData.image} onChange={handleChange} required>
                        <option value="Ubuntu Server 22.04" selected >Ubuntu Server 22.04</option>
                        <option value="Ubuntu Server 20.04">Ubuntu Server 20.04</option>
                        <option value="Ubuntu Server 18.04">Ubuntu Server 18.04</option>
                        <option value="Ubuntu Server 16.04">Ubuntu Server 16.04</option>
                        <option value="CentOs" disabled> CentOs</option>
                        <option value="Debian" disabled>Debian</option>
                        <option value="Windows 10" disabled >Windows 10</option>
                            
                    </select>
                </td>
            </tr>
            <tr>
                <td>
                    <label >Username:</label>
                </td>
                <td>
                    <input type="text" id="username" name="username" value={formData.username} onChange={handleChange} required />
                </td>
            </tr>
            <tr>
                <td>
                    <label >Password:</label>
                </td>
                <td>
                    <input type="password" id="password" name="password" value={formData.password} onChange={handleChange}  required />
                </td>
            </tr>

            <tr>
                <td>
                    <label >Confirm Password:</label>
                </td>
                <td>
                    <input type="password" id="confirmPassword" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange}  required />
                </td>
            </tr>
        
        </table>
            <div className="button-container">
                    <button className="submit" type="submit">Submit</button>
                </div>
        </form>
        </div>

  );
}

export default ConfigForm;
