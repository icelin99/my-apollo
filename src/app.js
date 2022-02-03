import * as ReactDOM from 'react-dom';
import React from 'react';
import { Provider } from 'mobx-react';

import 'styles/main.scss';
import STORE,{STORES} from 'store';
import Dreamview from 'components/Dreamview';
import {worldData} from '../src/store/websocket/websocket_realtime';

import * as lodash from 'lodash';

window.clone = lodash.cloneDeep;

window.STORE = STORE;
console.log('appdata',worldData);

ReactDOM.render(
    <Provider store={STORE} data={worldData}>
        <Dreamview />
    </Provider>,
    document.getElementById('root'),
);
