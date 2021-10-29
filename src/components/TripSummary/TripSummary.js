import React from "react";
import {
    MainWrapper,
    Header,
    Body,
    HeaderContent,
    Overlay,
    Title,
    Items,
    Item,
    Label,
    Text,
    BodyItem,
    Icon,
    BodyText,
    BodyLabel,
    Price
} from './TripSummaryStyle';
import UserIcon from "../../icons/user@3x.png";
import PriceIcon from "../../icons/wallet-passes-app.png";
import BriefcaseIcon from "../../icons/briefcase.svg";
import PetsIcon from "../../icons/pawprint.svg";
import { getMonthName } from "../../utils/index";
import { Accordion } from "react-bootstrap";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

export default function TripSummary({ booking, expandBehavior }) {
    const date = new Date(parseInt(booking.ts));
    let currentHours = date.getHours() > 12 ? date.getHours() - 12 : date.getHours();
    currentHours = currentHours.toString().length === 2 ? currentHours : "0" + currentHours;
    const currentMinutes = date.getMinutes().toString().length === 2 ? date.getMinutes() : "0" + date.getMinutes();
    const ampm = date.getHours() >= 12 ? 'PM' : 'AM';

    return (
        <MainWrapper className={"trip-sm-main cs-"+expandBehavior}>
            <Accordion  flush>
                <Accordion.Item eventKey="0">
                    <Header>
                        <Overlay />
                        <HeaderContent>
                            <Title> 
                                <Accordion.Header className="sub-title-dv">
                                    Trip Summary 
                                    <ArrowDropDownIcon className="trip-arrow-down" />
                                </Accordion.Header>
                            </Title>
                            <Items>
                                <Item>
                                    <Label>From</Label>
                                    <Text>{booking.from.en}</Text>
                                </Item>
                                <Item>
                                    <Label>To</Label>
                                    <Text>{booking.to.en}</Text>
                                </Item>
                                <Item>
                                    <Label>Departure</Label>
                                    <Text>{`${date.getDate()} ${getMonthName(date.getMonth())}, ${date.getFullYear()} - ${currentHours}:${currentMinutes} ${ampm}`}</Text>
                                </Item>
                            </Items>
                        </HeaderContent>
                    </Header>
                    <Accordion.Body>
                    <Body>
                        <BodyItem>
                            <Icon src={UserIcon} />
                            <BodyLabel>Passengers</BodyLabel>
                            <BodyText>{booking.passengers}</BodyText>
                        </BodyItem>
                        <BodyItem>
                            <Icon src={BriefcaseIcon} />
                            <BodyLabel>Luggage</BodyLabel>
                            <BodyText>{booking.luggage}</BodyText>
                        </BodyItem>
                        <BodyItem>
                            <Icon src={PetsIcon} />
                            <BodyLabel>Brining Pets</BodyLabel>
                            <BodyText>{booking.pets ? "Yes" : "No"}</BodyText>
                        </BodyItem>
                        <BodyItem>
                            <Icon src={UserIcon} />
                            <BodyLabel>Non-Smoking</BodyLabel>
                            <BodyText>{booking.nonSmoking ? "Yes" : "No"}</BodyText>
                        </BodyItem>
                        <BodyItem>
                            <Icon src={PriceIcon} />
                            <BodyLabel>Price</BodyLabel>
                            <BodyText>
                                <Price>{`${booking.price}`}</Price>
                            </BodyText>
                        </BodyItem>
                    </Body>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </MainWrapper>
    );
}
