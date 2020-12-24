import React from "react";
import Details from "./component/Details";
import AddDetails from "./component/AddDetails";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Button, Container } from "react-bootstrap";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAddDetail: false,
      error: null,
      response: {}
    };
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onCreate() {
    this.setState({
      isAddDetail: true
    });
  }
  onFormSubmit(data) {
    const apiUrl = "https://jsonplaceholder.typicode.com/users";

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const options = {
      method: "POST",
      body: JSON.stringify(data),
      myHeaders
    };
    fetch(apiUrl, options)
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            response: result,
            isAddDetail: false
          });
        },
        (error) => {
          this.setState({ error });
        }
      );
  }

  render() {
    return (
      <div className="app">
        <Container>
          <h1 style={{ textAlign: "center" }}>Profile</h1>
          {!this.state.isAddDetail && (
            <Button variant="primary" onClick={() => this.onCreate()}>
              Add Details
            </Button>
          )}
          {!this.state.isAddDetail && <Details />}
          {this.state.isAddDetail && (
            <AddDetails onFormSubmit={this.onFormSubmit} />
          )}
          {this.state.error && <div>Error:{this.state.error.message}</div>}
        </Container>
      </div>
    );
  }
}
