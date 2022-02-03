import React from 'react';
import { inject, observer } from 'mobx-react';
import { observable } from 'mobx';
import MainView from './MainView';
import {Switch} from 'antd';

@inject('store','data') @observer
export default class PlanningView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      disable : false,
      max : 0,
      min : 0,
      step : 1,
      framenum: 0,
    };
    // window.ref = this.refslider = React.createRef();
    // const { saveAsCsv  } = useJsonToCsv();
    // window.saveAsCsv = this.saveAsCsv = saveAsCsv;
  }
  save_reference_line = () => {
    const line_array = [];
    window.line_array = line_array;
    console.log('worlddata',this.props.data);
    console.log('window.worldData',window.worldData);
    for(let i = 0; i < windows.worldData.length; i++) {
      console.log(i);
    }
  }

  handleDisabledChange = disabled => {
    this.setState({disabled:!disabled});
    this.save_reference_line();
  }

  render() {
    const { dimension } = this.props.store;
    const { disabled } = this.state;

    const height = dimension.myview.height;
    const width = dimension.myview.width;
    const main_height = dimension.main.height;
    const main_width = dimension.main.width;
    const data = this.props.data;
    // const aaa = data[0].timestamp;
    console.log('data',data);
    return(
      <React.Fragment>
        <div className='planning-view' style={{ height:main_height,witdh:main_width }}>
          <MainView />
        </div>
        <div  className='planning-view' style={{ height,width }}>
          show planning evaluation
          <Switch checked={disabled} onChange={this.handleDisabledChange} />
        </div>
        </React.Fragment>
    );
  }
}