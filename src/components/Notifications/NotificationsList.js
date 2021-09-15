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

const NotificationsList = ({notifications, showHeader, variant}) => {
    const isNotificationsPage = variant === "notifications-page" ? true : false;
    let notificationsRows = [];

    for (let i = 0; i < notifications.length; i++) {
        notificationsRows.push(<Notification key={notifications[i].id} title={notifications[i].title} msg={notifications[i].msg} type={notifications[i].type} variant={variant} />);
    }

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
                    {notificationsRows}
                </Content>
            </ContentWrapper>
        </>
    );
};

export default NotificationsList;
