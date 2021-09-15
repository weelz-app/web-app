import React from 'react';
import {
    MainWrapper,
    Image,
    Content,
    IconBtn,
    Title
} from "./MobileImageAdStyles"
import MobileAd from "../../icons/mobile-ad.png";
import Android from "../../icons/android.png";
import Apple from "../../icons/apple.png";

export default function MobileImageAd() {
    return (
        <MainWrapper className="mobile-image-ad">
            <Image src={MobileAd} />
            <Content>
                <Title>Download Weelz <br /> mobile app</Title>
                <div>
                    <IconBtn src={Android} />
                    <IconBtn src={Apple} />
                </div>
            </Content>
        </MainWrapper>
    )
}
