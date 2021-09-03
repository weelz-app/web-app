import React from "react";
import Notification from "./Notification";
import {
    Header,
    Title,
    ArrowIcon,
    Content,
    StyledLink
} from "./NotificationsListStyles";

const NotificationsList = ({notifications, showHeader, variant}) => {
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
            <Content height={variant === "notifications-page" ? "100%" : "calc(100% - 39px)"}>
                {notificationsRows}
            </Content>
        </>
    );
};

export default NotificationsList;
