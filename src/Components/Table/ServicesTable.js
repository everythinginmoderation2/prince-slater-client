import React from 'react';
import './ServicesTable.css'

const ServicesTable = () => {
    return <div>
        <table>
            <tr className="row">
                <th scope="row"><h1 className="row-title">Guitar Training</h1></th>
                <td><p>This is a description. Possibly, a description that gets
                    longer and longer for the sole purpose of testing the maximum
                    amount of characters necessary for a total breaking point.</p></td>
                <button className="booking-list-button">Schedule Now</button>
            </tr>
            <tr className="row">
                <th scope="row"><h1 className="row-title no-pad-right">Singer Songwriter</h1></th>
                <td><p>This is a description. Possibly, a description that gets
                    longer and longer for the sole purpose of testing the maximum
                    amount of characters necessary for a total breaking point.</p></td>
                <button className="booking-list-button">Schedule Now</button>
            </tr>
            <tr className="row">
                <th scope="row"><h1 className="row-title">Performance</h1></th>
                <td><p>This is a description. Possibly, a description that gets
                    longer and longer for the sole purpose of testing the maximum
                    amount of characters necessary for a total breaking point.</p></td>
                <button className="booking-list-button">Schedule Now</button>
            </tr>
        </table>
    </div>;
};

export default ServicesTable;
