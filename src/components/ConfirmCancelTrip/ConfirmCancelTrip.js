import React from 'react';
import {
    ModalWrapper,
    StyledModal,
    Header,
    Title
} from "./ConfirmCancelTripStyles";
import Btn from "../Btn/Btn";
import Fade from '@material-ui/core/Fade';

export default function ConfirmCancelTrip({toggleModal, cancelTrip, isOpen}) {
    return (
        <ModalWrapper
            open={isOpen}
            onClose={() => toggleModal()}
            closeAfterTransition
            disableEnforceFocus={true}
        >
            <Fade in={isOpen}>
                <StyledModal>
                    <Btn
                        variant="close-btn"
                        onClick={() => toggleModal()}
                        iconSize="28"
                        topPostion="10px"
                    />
                    <Header>
                        <Title>Are you sure you want <br /> to cancel your trip?</Title>
                    </Header>
                    <Btn
                        text="Cancel Trip"
                        className="btn--block btn--red btn--camel-case"
                        onClick={() => cancelTrip()}
                        style={{marginBottom: "7.5px"}}
                    />
                    <Btn
                        text="Ignore"
                        className="btn--block btn--secondary btn--camel-case"
                        onClick={() => toggleModal()}
                    />
                </StyledModal>
            </Fade>
        </ModalWrapper>
    )
}
