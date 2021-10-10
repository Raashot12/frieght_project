import React from 'react'
import { ToogleIcon } from '../components/ToogleIcon/ToogleIcon'
import "./AdditionalService.css"
const AdditionalService = () => {
    return (
        <div className="container-two">
            <div className="additional-container">
                <h3 className="text-additional">Additional Service</h3>
                <div className="parent-toogling-container">
                    <div className="first-part-toogling">
                        <div className="container-item-toggle">
                            <ToogleIcon />
                            <div className="flex-item-text">
                                <h3>Export Forwarding</h3>
                                <p>We handle customs clearance and documentation</p>
                            </div>
                        </div>
                        <div className="container-item-toggle">
                            <ToogleIcon />
                            <div className="flex-item-text">
                                <h3>Cargo Insurance</h3>
                                <p>Protect your cargo from logistics risks up to its full value</p>
                            </div>
                        </div>
                    </div>
                    <div className="second-part-toogling">
                        <div className="container-item-toggle">
                            <ToogleIcon />
                            <div className="flex-item-text">
                                <h3>Import Customs Clearance</h3>
                                <p>We handle import customs and regulatory requirements.</p>
                            </div>
                        </div>
                        <div className="container-item-toggle">
                            <ToogleIcon />
                            <div className="flex-item-text">
                                <h3>Transport / Delivery</h3>
                                <p>We deliver the cargo to your door step from the ports.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdditionalService
