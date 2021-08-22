import React from 'react';
import { MainWrapper, Title, Icon, Text, Overlay, Content } from "./MobileAppAdStyles";
import Android from "../../icons/android.png";
import Apple from "../../icons/apple.png";

export default function MobileAppAd({look}) {
    return (
        
        <MainWrapper className={look === "image" ? "mobile-image" : ""}>
            {look !== "image" ? (
                <Overlay />
            ) : null}
            <Content>
                <Title>Weelz Mobile App</Title>
                <Text>Follow your trips on Weelz app</Text>
                <Icon src={Android} />
                <Icon src={Apple} />
            </Content>
        </MainWrapper>
    )
}
