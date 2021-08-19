import React from 'react';
import { MainWrapper, Title, Icon, Text, Overlay, Content } from "./MobileAppAdStyles";
import Android from "../../icons/android.png";
import Apple from "../../icons/apple.png";

export default function MobileAppAd() {
    return (
        <MainWrapper>
            <Overlay />
            <Content>
                <Title>Weelz Mobile App</Title>
                <Text>Follow your trips on Weelz app</Text>
                <Icon src={Android} />
                <Icon src={Apple} />
            </Content>
        </MainWrapper>
    )
}
