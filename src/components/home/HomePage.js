import React from 'react';
import {Link} from 'react-router';
import{connect} from 'react-redux';
import * as personActions from '../../actions/calculateActions';
import {bindActionCreators} from 'redux';
import PersonInfoForm from './PersonInfoForm';
import Calories from './Calories';
import MacroCyle from './MacroCycle';
import toastr from 'toastr';

class HomePage extends React.Component {
  constructor(props, context){
    super(props, context);

    this.state = {
      personInfo: Object.assign({}, this.props.personInfo),
      errors: {},
      showCals: false,
      day: 1
    }

    this.updatePersonInfoState = this.updatePersonInfoState.bind(this);
    this.calculateCalories = this.calculateCalories.bind(this);
  }

  componentWillReceiveProps(nextProp){
    if (this.props.personInfo.cals !== nextProp.personInfo.cals){
      this.setState({personInfo: Object.assign( {}, nextProp.personInfo)});
    }
  }

  updatePersonInfoState(event){
    const field = event.target.name;
    let personInfo = this.state.personInfo;
    personInfo[field] = event.target.value;
    return this.setState({personInfo: personInfo});
  }

  calculateCalories(event) {
    event.preventDefault();
      this.props.actions.getCalories(this.state.personInfo)
      .then(()=>{
        toastr.success("Plan calculated");
        this.setState({showCals: true});
      })
      .catch((error) => {
        toastr.error(error);
      })

  }

  render() {
    let showCals = this.state.showCals;
    return (
      <div>
        <PersonInfoForm
          personInfo={this.state.personInfo}
          onChange={this.updatePersonInfoState}
          onSave={this.calculateCalories}
          errors={this.state.errors}
        />
        {showCals ?
          <Calories personInfo={this.state.personInfo} /> :
         <div></div>
       }

      </div>


    );
  }
}


function mapStateToProps(state, ownProps){
  let personInfo = { gender: "",
    measurement: "",
    goal: "",
    age: "",
    weight: "",
    height:"",
    activity: "",
    macros: {low: {}, high:{}, no: {}},
    dietPlan: {
      name: "",
      diet:[]
    }
  };

  if (Object.keys(state.calculator).length === 0 && state.calculator.constructor === Object) {
    return {
      personInfo: personInfo
    };
  } else {
    return {
      personInfo: state.calculator
    }
  }
}

function mapDispatchToProps(dispatch){
  return {
    actions: bindActionCreators(personActions, dispatch)
  }
}


export default connect(mapStateToProps, mapDispatchToProps) (HomePage);
