import React from 'react';
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import NotificationIcon from "../../icons/notification.png";
import {
    MainWrapper,
    ContentWrapper,
    Icon,
    Title,
    Text
} from "./NotificationStyles";

export default function Notification({title, msg, onClick}) {
    return (
        <MainWrapper onClick={onClick}>
            <ContentWrapper>
                <Icon src={NotificationIcon} />
                <div>
                    <Title>{title}</Title>
                    <Text>{msg}</Text>
                </div>
            </ContentWrapper>
            <ArrowForwardIosIcon />
        </MainWrapper>
    )
}
