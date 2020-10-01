import React , { Component }  from 'react';
import './App.css';
import  CheckBox  from './components/CheckBox';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // items list checkbox
      selectItems: [
        {id: 1, value: "Item 1", isChecked: false},
        {id: 2, value: "Item 2", isChecked: false},
        {id: 3, value: "Item 3", isChecked: false},
        {id: 4, value: "Item 4", isChecked: false},
        {id: 5, value: "Item 5", isChecked: false}
      ]
    }
  }

  /**
  * function handle on check/uncheck All items checkbox
  * @param event : event taget checkbox
  */
  handleAllChecked = (event) => {
    let selectItems = this.state.selectItems
    selectItems.forEach(item => item.isChecked = event.target.checked)
    this.setState({selectItems: selectItems})
  }

  /**
  * function handle on check item checkbox
  * @param event : event taget checkbox
  */
  handleCheckChieldElement = (event) => {
    let selectItems = this.state.selectItems
    selectItems.forEach(item => {
      if (item.value === event.target.value)
        item.isChecked =  event.target.checked
    })
    this.setState({selectItems: selectItems})
  }

  render() {
    return (
      <div className="App">
        <h1> Check and Uncheck All Items </h1>
        <input type="checkbox" onClick={this.handleAllChecked}  value="checkedall" /> Select All
        <ul>
        {
          this.state.selectItems.map((item) => {
            return (<CheckBox handleCheckChieldElement={this.handleCheckChieldElement}  {...item} />)
          })
        }
        </ul>
      </div>
    );
  }
}


export default App;
