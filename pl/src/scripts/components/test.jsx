import React from 'react';

class HelloWorld extends React.Component {

  handler(event) {
    console.log('click', event);
  }
  changeInput(event) {
    console.log('click', event.target.value);
  }
  render() {
    console.log('render');
      return (
        <div>
          <h1 onClick={this.handler}>Hello from {this.props.phrase}!</h1>
          <form className="navbar-form" role="search">
            <div className="form-group">
              <input type="text" name="moviename" className="form-control" placeholder="Search Movies" onChange={this.changeInput} value={this.props.searchText}/>
            </div>
          </form>
        </div>
      )
  }
}

export default HelloWorld;
