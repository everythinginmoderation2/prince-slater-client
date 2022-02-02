import React from 'react';
import './ServicesTable.css'

const ServicesTable = () => {
    return (<div className="services-table-container">
        <table>
            <caption>Services</caption>
            <thead>
                <tr>
                    <th scope="col">Skill Type</th>
                    <th scope="col">Description</th>
                    <th scope="col">Session Length</th>
                    <th scope="col">Price</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">Adult Guitar</th>
                    <td className="service-description"></td>
                    <td className="service-session-length">30 mins</td>
                    <td className="service-price">$30.00</td>
                </tr>
                <tr>
                    <th scope="row">Children Guitar</th>
                    <td className="service-description"></td>
                    <td className="service-session-length">30 mins</td>
                    <td className="service-price">$30.00</td>
                </tr>
                <tr>
                    <th scope="row">Production</th>
                    <td className="service-description"></td>
                    <td className="service-session-length">45 mins</td>
                    <td className="service-price">$30.00</td>
                </tr>
                <tr>
                    <th scope="row">Singer Songwriter</th>
                    <td className="service-description"></td>
                    <td className="service-session-length">30 mins</td>
                    <td className="service-price">$30.00</td>
                </tr>
                <tr>
                    <th scope="row">Performance</th>
                    <td className="service-description"></td>
                    <td className="service-session-length">30 mins</td>
                    <td className="service-price">$30.00</td>
                </tr>
            </tbody>
            <tfoot>
                <th scope="row">Total</th>
                <td className="service-description">Advancement</td>
                <td className="service-session-length">30 mins</td>
                <td className="service-price">Priceless</td>
            </tfoot>
        </table>
    </div>);
};

export default ServicesTable;
