import React, {Component} from 'react';
import SimpleForm from './SimpleForm';
import {Values} from 'redux-form-website-template'

class Simple extends Component {
  render(){
    const {handleOnSubmit}=this.props;
    return (
      <div id="page-wrapper">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6 col-lg-6 col-sm-12">
              <div className="white-box">
                <h3>Simple Form</h3>
                <SimpleForm onSubmit={handleOnSubmit}></SimpleForm>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 col-sm-12">
              <div className="white-box">
                <Values form="simple"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Simple;
