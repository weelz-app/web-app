import React from 'react';
import {
    ModalWrapper,
    StyledModal,
    Image,
    Title,
    Heighlight,
    StyledLink
} from "./FeedbackThanksStyles";
import Btn from "../Btn/Btn";
import Fade from '@material-ui/core/Fade';
import StarImage from "../../icons/star.png";

export default function FeedbackThanks({toggleModal, isOpen}) {
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
                    <Image src={StarImage} />
                    <Title>
                        Thanks for travelling <br /> with 
                        <Heighlight> Weelz!</Heighlight>
                    </Title>
                    <StyledLink to="/">
                        Back to home
                    </StyledLink>
                </StyledModal>
            </Fade>
        </ModalWrapper>
    )
}
