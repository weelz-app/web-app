import React from "react";
import Notification from "./Notification"
import {
    Header,
    Title,
    ArrowIcon,
    Content
} from "./NotificationsListStyles";

const NotificationsList = ({notifications}) => {
    let notificationsRows = [];

    for (let i = 0; i < 3; i++) {
        notificationsRows.push(<Notification key={notifications[i].id} title={notifications[i].title} msg={notifications[i].msg} />);
    }

    return (
        <>
            <Header>
                <Title>Notifications</Title>
                <ArrowIcon />
            </Header>
            <Content>
                {notificationsRows}
            </Content>
        </>
    );
};

export default NotificationsList;
