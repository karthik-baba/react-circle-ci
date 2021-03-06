import React, { Component } from "react";
import { connect } from 'react-redux';
import * as actions from "../../../store/actions/index";
import classes from "./QuantityButtonComponent.css";


class QuantityButtonComponent extends Component {
  state = {
    quantityDisplayValue: this.props.selectedItem.selectedQuantity
  }
  render() {

    const onDecrementBtn = (event) => {
      let newQuantityDisplayValue = this.state.quantityDisplayValue - 1;
      this.setState({quantityDisplayValue : newQuantityDisplayValue});
      this.props.updateSelectedItem({"selectedId": this.props.selectedItem.id, "selectedQuantity": newQuantityDisplayValue});
    }
    const onIncrementBtn = () => {
      let newQuantityDisplayValue = this.state.quantityDisplayValue + 1;
      this.setState({quantityDisplayValue : newQuantityDisplayValue});
      this.props.updateSelectedItem({"selectedId": this.props.selectedItem.id, "selectedQuantity": newQuantityDisplayValue});
    }
    const updateQuantity = (event) => {
      let newQuantityDisplayValue = event.target.value;
      this.setState({quantityDisplayValue : newQuantityDisplayValue});
      this.props.updateSelectedItem({"selectedId": this.props.selectedItem.id, "selectedQuantity": newQuantityDisplayValue});
    }
    
    
    return (
      <div className={classes.quantityPicker}>
        <button className={classes.decrementBtn} onClick={onDecrementBtn}>
          -
        </button>
        <div>
          <input id="quantityDisplay" type="number" className={classes.quantityDisplay} value={this.state.quantityDisplayValue} maxlength="1" />
        </div>
        <button className={classes.incrementBtn} onClick={onIncrementBtn}>
          +
        </button>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    selectedDressesArray: state.orderManageReducer.selectedDresses
  };
};
const mapDispatchToProps = dispatch => {
  return {
    updateSelectedItem: (item) => dispatch(actions.updateSelectedItem(item)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(QuantityButtonComponent);
