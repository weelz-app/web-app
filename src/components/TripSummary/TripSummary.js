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

export default function TripSummary({booking}) {
    return (
        <MainWrapper>
            <Header>
                <Overlay />
                <HeaderContent>
                    <Title>Trip Summary</Title>
                    <Items>
                        <Item>
                            <Label>From</Label>
                            <Text>{booking.from}</Text>
                        </Item>
                        <Item>
                            <Label>To</Label>
                            <Text>{booking.to}</Text>
                        </Item>
                        <Item>
                            <Label>Departure</Label>
                            <Text>{`10 May, 2021 - 10:15 PM`}</Text>
                        </Item>
                    </Items>
                </HeaderContent>
            </Header>
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
                        <Price>{`${booking.price} ${booking.currency}`}</Price>
                    </BodyText>
                </BodyItem>
            </Body>
        </MainWrapper>
    );
}