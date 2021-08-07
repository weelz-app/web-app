import React from 'react';

import {DivTrip, ImgTrip, Dvlinks, LinkApp} from './weelz-app-style';

// ----- Images
import app from '../icons/avatar-trip.png';
import apple from '../icons/apple.png';
import android from '../icons/android.png';



function WeelzApp() {

    return (
        <DivTrip>
            <ImgTrip src={app} />
            <Dvlinks className="w-100 link-apps px-3">
                <h4 className="col-12  mt-3 mb-1">Weelz Mobile App</h4>
                <p className="col-12  mb-3">Follow your trips on Weelz app</p>
                <LinkApp className="mb-3" href="#">
                    <img className="d-block w-100" src={android} />
                </LinkApp>

                <LinkApp href="#">
                    <img className="d-block w-100" src={apple} />
                </LinkApp>
            </Dvlinks>
        </DivTrip>

    );
}

export default WeelzApp;
