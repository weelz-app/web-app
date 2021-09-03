import React from 'react';
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import InfoIcon from "../../icons/notification.png";
import CheckIcon from "../../icons/confirmed.png";
import PendingIcon from "../../icons/pending.png";
import CanceledIcon from "../../icons/canceled.png";
import {
    MainWrapper,
    ContentWrapper,
    Icon,
    Title,
    Text
} from "./NotificationStyles";

export default function Notification({title, msg, type, variant, onClick}) {
    return (
        <MainWrapper onClick={onClick} variant={variant}>
            <ContentWrapper>
                {type === "info" ? (
                    <Icon src={InfoIcon} variant={variant} />
                ) : type === "confirmed" ? (
                    <Icon src={CheckIcon} variant={variant} />
                ) : type === "pending" ? (
                    <Icon src={PendingIcon} variant={variant} />
                ) : (
                    <Icon src={CanceledIcon} variant={variant} />
                )}
                <div>
                    <Title marginBottom={variant === "notifications-page" ? "3.5px" : "2.5px"}>{title}</Title>
                    <Text>{msg}</Text>
                </div>
            </ContentWrapper>
            <ArrowForwardIosIcon />
        </MainWrapper>
    )
}
