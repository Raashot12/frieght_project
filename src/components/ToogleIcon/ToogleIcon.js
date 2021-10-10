import React from 'react'
import "./ToogleIcon.css"
export const ToogleIcon = () => {
    return (
        
            <div class='toggle-switch'>
                <label className="toogle-label">
                    <input className="toogle-input" type='checkbox' />
                    <span class='slider'></span>
                </label>
            </div>

    )
}
