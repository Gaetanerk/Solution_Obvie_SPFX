import * as React from 'react';
import styles from './Metracom.module.scss';
import { useState } from 'react';
import { HomePage } from './HomePage';
import { DetailPage } from './DetailPage';

export function Welcome(props) {
    
    const [screen, setScreen] = useState('home');

    return (
        <div>
            {screen === 'home' && <HomePage context={props.context} screen={screen}setScreen={setScreen}/>}
            {screen === 'detail' && <DetailPage context={props.context} screen={screen}setScreen={setScreen}/>}
        </div>
    )
}