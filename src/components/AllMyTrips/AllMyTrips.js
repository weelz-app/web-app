import React from 'react';
import {
    MainWrapper,
    Trips,
    Tabs,
    Tab
} from "./AllMyTripsStyles";
import Trip from "../MyTrips/Trip"

export default function AllMyTrips({trips}) {
    const orderedTrips = trips.sort((a, b) => new Date(parseInt(b.ts)) - new Date(parseInt(a.ts)));
    return (
        <MainWrapper>
            <Tabs>
                <Tab className="active">All</Tab>
                <Tab>Last Week</Tab>
                <Tab>Last Month</Tab>
                <Tab>May</Tab>
                <Tab>April</Tab>
            </Tabs>
            <Trips>
                {orderedTrips.map(trip => (
                    <Trip key={trip.id} trip={trip} />
                ))}
            </Trips>
        </MainWrapper>
    )
}
