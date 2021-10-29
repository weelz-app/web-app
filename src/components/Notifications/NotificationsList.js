import React from "react";
import Notification from "./Notification";
import {
    Header,
    Title,
    ArrowIcon,
    ContentWrapper,
    Content,
    StyledLink
} from "./NotificationsListStyles";
import { MY_NOTIFICATIONS } from "../../graphql/queries";
import { useMutation, useQuery } from "@apollo/client";


const NotificationsList = ({ notifications, showHeader, variant }) => {
    const isNotificationsPage = variant === "notifications-page" ? true : false;
    
    const { loading, data } = useQuery(MY_NOTIFICATIONS);
    return (
        <>
            {showHeader ? (
                <Header>
                    <Title>Notifications</Title>
                    <StyledLink to="/notifications">
                        <ArrowIcon />
                    </StyledLink>
                </Header>
            ) : null}
            <ContentWrapper
                height={isNotificationsPage ? "100%" : "calc(100% - 39px)"}
                className={`${isNotificationsPage ? "scrollable" : ""}`}
            >
                <Content
                    className={`${isNotificationsPage ? "scrollable" : ""}`}
                >
                    {data && data.myNotifications.map(n => 
                        <Notification key={n.id} title={n.title.en} msg={n.description.en} type={n.type} variant />)}
                </Content>
            </ContentWrapper>
        </>
    );
};

export default NotificationsList;
