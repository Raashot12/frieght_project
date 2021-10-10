import React from 'react'
import Areoplane from '../../Icons/Areoplane'
import Freight from '../../Icons/Freight'
import Officer from '../../Icons/Officer'
import "./NewBooking.css"
import Truck from '../../Icons/Truck'
import { Container } from '@material-ui/core'
import Formfill from '../ServiceAir/Formfill'
import CargoDetail from '../CargoDetails/CargoDetail'
import AdditionalService from '../../AdditionalService/AdditionalService'
const NewBooking = () => {
    return (
        <div className="display-new-flex">
            <div className="container">
                <div className="new-booking-container">
                    <div>
                        <i class="fas fa-arrow-left"></i>
                    </div>
                    <Container>
                    <div className="container-two">
                        <div className="booking">
                            <h3>New Booking</h3>
                            <p className="sub-title-for-booking">Fill in the information below to get a quote or create a new booking</p>
                        </div>
                        <div className="service-bg">
                            <h4>Select a service</h4>
                            <div className="cards-container">
                                <div className="card-one card-size">
                                    <p className="air-freight">Air Freight</p>
                                    <div className="freight-icon-container">
                                    <Areoplane></Areoplane>
                                    </div>
                                </div>
                                <div className="card-two card-size">
                                    <p className="sea-freight">Sea Freight</p>
                                    <div className="sea-freight-icon-container">
                                      <Freight/>
                                    </div>
                                </div>
                                <div className="card-two card-size">
                                    <p className="inland-truck"> Inland<br></br> (Truck & Barge)</p>
                                    <div className="truck-freight-icon-container">
                                        <Truck/>
                                    </div>
                                </div>
                                <div className="card-two card-size">
                                    <p className="customs-clearance">Customs<br/> Clearance</p>
                                    <div className="officee-box-container">
                                        <Officer></Officer>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                        <Formfill></Formfill>
                        <CargoDetail />
                        <AdditionalService/>
                    </Container>
                </div>
            </div>
        </div>
    )
}

export default NewBooking

