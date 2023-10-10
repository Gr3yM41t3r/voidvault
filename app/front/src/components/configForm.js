import React from 'react';

function ConfigForm() {

  return (
    <div class="center-container">
    <table>
        <tr>
            <td>
                <label>CPU:</label>
            </td>
            <td>
                <select id="menu1b" name="menu1b">
                    <option value="option1">1</option>
                    <option value="option2">2</option>
                    <option value="option2">3</option>
                    <option value="option2">4</option>
                    <option value="option2">5</option>
                    <option value="option2">6</option>
                    <option value="option2">7</option>
                    <option value="option2">8</option>
                </select>
            </td>
        </tr>
        <tr>
            <td>
                <label for="menu2a">RAM:</label>
            </td>
            <td>
                <select id="menu2b" name="menu2b">
                    <option value="option1">1GiB</option>
                    <option value="option1">2GiB</option>
                    <option value="option1">4GiB</option>
                    <option value="option1">8GiB</option>
                    <option value="option1">16GiB</option>
                    <option value="option1">32GiB</option>
                        
                </select>
            </td>
           
        </tr>
        <tr>
            <td>
                <label for="menu3a">Storage</label>
            </td>
            <td>
            <input type="text" id="input1" name="input1" placeholder='20GiB, min: 10 GiB, max 60 GiB'  />

            </td>
        </tr>

        <tr>
            <td>
                <label for="input1">GPU:</label>
            </td>
            <td>
                <select id="menu2b" name="menu2b">
                    <option value="option1" disabled>1x TESLA K80 12 GB</option>
                    <option value="option1" disabled>2x TESLA K80 12 GB</option>
                    <option value="option1" disabled>1x TESLA M40 24 GB</option>
                </select>
            </td>
        </tr>

        <tr>
            <td>
                <label for="menu3a">Image</label>
            </td>
            <td>
                <select id="menu2b" name="menu2b">
                    <option value="option1">Ubuntu Server 22.04</option>
                    <option value="option1">Ubuntu Server 20.04</option>
                    <option value="option1">Ubuntu Server 18.04</option>
                    <option value="option1">Ubuntu Server 16.04</option>
                    <option value="option1" disabled> CentOs</option>
                    <option value="option1" disabled>Debian</option>
                    <option value="option1" disabled >Windows 10</option>
                        
                </select>
            </td>
        </tr>
        <tr>
            <td>
                <label for="input1">Username:</label>
            </td>
            <td>
                <input type="text" id="input2" name="input2"/>
            </td>
        </tr>
        <tr>
            <td>
                <label for="input1">Password:</label>
            </td>
            <td>
                <input type="password" id="input2" name="input2"/>
            </td>
        </tr>

        <tr>
            <td>
                <label for="input1">Confirm Password:</label>
            </td>
            <td>
                <input type="password" id="input2" name="input2"/>
            </td>
        </tr>
       
    </table>
            <div className="button-container">
                <button className="submit" type="submit" >Submit</button>
            </div>
</div>

  );
}

export default ConfigForm;
