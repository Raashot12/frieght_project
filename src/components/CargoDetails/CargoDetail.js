import React from 'react'
import { ToogleIcon } from '../ToogleIcon/ToogleIcon'
import "./CargoDetail.css"
const CargoDetail = () => {
    return (
        <div className="container-two">
            <div className="cargo-detail-container">
                <div className="flex-cargo-text">
                    <h3>Cargo Details</h3>
                    <div className="flex-toggle-text">
                        <ToogleIcon />
                        <p className="cargo-text">
                            <span>Dangerous Cargo</span> (ex. Chemicals, Battery)</p>
                    </div>
                </div>
                <div className="dimension-package-container">
                    <button className="active-package">
                      Total  Dimensions
                    </button>
                    <button className="non-active-package">
                        Total  Packages
                    </button>
                </div>
                <div className="total-summary-box">
                    <div className="input-cargo-container">
                        <label>
                            Total Volume
                        </label>
                        <div>
                            <input type="text" className="cargo-input" placeholder="cbm" />
                        </div>
                    </div>
                    <div className="input-cargo-container">
                        <label>
                            Total Weight
                        </label>
                        <div>
                            <input type="text" className="cargo-input" placeholder="Kg" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CargoDetail
