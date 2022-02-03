import React from 'react';
import { inject, observer } from 'mobx-react';
import { observable } from 'mobx';
import MainView from './MainView';

@inject('store') @observer
export default class PreView extends React.Component {
  render() {
    const { isInitialized, dimension } = this.props.store;

    const height = dimension.myview.height;
    const width = dimension.myview.width;
    const main_height = dimension.main.height;
    const main_width = dimension.main.width;
    return(
      <React.Fragment>
        <div className='planning-view' style={{ height:main_height,witdh:main_width }}>
          <MainView />
        </div>
        <div  className='planning-view' style={{ height,width }}>
          <button onClick={() => this.props.onClose()}>show planning evaluation</button>
        </div>
        </React.Fragment>
    );
  }
}