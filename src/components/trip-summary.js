import React from "react";

import {SectionTrip, DivTrip, ImgTrip, DTrip, DetaTrip, HTrip, Head} from './trip-summary-style';


// ----- Images
import cairo from '../icons/cairo.jpg';


const TripSummaryC = () => {

    return (
        <SectionTrip className="p-5 row mx-0">
            <DivTrip>
                <Head className="w-100 head-trip row mx-0  align-content-between">
                    <ImgTrip src={cairo} />
                    <HTrip className="col-12 p-3 ">Trip Summary</HTrip>
                    <DTrip className="row mx-0">
                        <div className="col-auto px-3 py-3">
                            <span className="w-100 d-block">
                                From
                            </span>
                            <span className="w-100 d-block">
                                Alexandria
                            </span>
                        </div>
                        <div className="col-auto px-3 py-3">
                            <span className="w-100 d-block">
                                To
                            </span>
                            <span className="w-100 d-block">
                                Cairo
                            </span>
                        </div>
                        <div className="col-auto px-3 py-3">
                            <span className="w-100 d-block">
                                Departure
                            </span>
                            <span className="w-100 d-block">
                                10 May, 2021 - 10:15 Pm
                            </span>
                        </div>
                    </DTrip>
                </Head>
                <div className="w-100 py-2">
                    <div className="row mx-0 py-2">
                        <DetaTrip className="col-5 px-3 ">
                            Passengers
                        </DetaTrip>
                        <div className="col-6 px-3">1</div>
                    </div>

                    <div className="row mx-0 py-2">
                        <DetaTrip className="col-5 px-3">
                            Luggage
                        </DetaTrip>
                        <div className="col-6 px-3">2</div>
                    </div>

                    <div className="row mx-0 py-2">
                        <DetaTrip className="col-5 px-3">
                            Brining Pets
                        </DetaTrip>
                        <div className="col-6 px-3">No</div>
                    </div>

                    <div className="row mx-0 py-2">
                        <DetaTrip className="col-5 px-3">
                            Non-Smoking
                        </DetaTrip>
                        <div className="col-6 px-3">Yes</div>
                    </div>

                    <div className="row mx-0 py-2">
                        <DetaTrip className="col-5 px-3">
                            Price
                        </DetaTrip>
                        <div className="col-6 px-3 color-gr">30 EGP</div>
                    </div>
                </div>
            </DivTrip>

        </SectionTrip>

    );
}

export default TripSummaryC;
