import React from "react";
import {
  NotificationsWrapper,
  NotificationItem,
  Icon,
  MainLabel,
  NotificationHeader,
  Excerpt,
  NotificationCard
} from "./NotificationStyle";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
const Notification = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <div className="p-3">
      <div className="d-flex flex-row justify-content-between align-items-center">
        <NotificationHeader>Notifications</NotificationHeader>
        <ArrowRightAltIcon />
      </div>
      <NotificationsWrapper className="d-flex flex-row align-items-center justify-content-between">
        <NotificationItem className="d-flex flex-row align-items-center justify-content-between w-100">
          <NotificationCard className="d-flex  p-2 w-100">
            <Icon src="https://cdn.zeplin.io/60ec51664e2cf5af3e45b394/assets/f8bddfef-e352-4b03-a3c0-f452e72e4e1c.svg" />
            <div className="d-flex flex-column flex-grow-1">
              <MainLabel>We are waiting your feedback!</MainLabel>
              <Excerpt>Alexandria to Cairo triExcerpt, 10 May 2021</Excerpt>
            </div>
            <ArrowForwardIosIcon />
          </NotificationCard>
        </NotificationItem>
      </NotificationsWrapper>
    </div>
  );
};

export default Notification;
