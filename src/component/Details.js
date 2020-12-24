import React from "react";

class Details extends React.Component {
  state = {
    error: null,
    detail: []
  };
  componentDidMount() {
    const apiUrl = "https://jsonplaceholder.typicode.com/users";
    fetch(apiUrl)
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            detail: result
          });
        },
        (error) => {
          this.setState({ error });
        }
      );
  }

  render() {
    const { error, detail } = this.state;
    if (error) {
      return <div> Error : {error.message}</div>;
    } else {
      return (
        <div>
          <h2>Details List</h2>
          <table className="table table-dark">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>User Name</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {detail.map((detail) => (
                <tr className="table-active" key={detail.id}>
                  <td>{detail.id}</td>
                  <td>{detail.name}</td>
                  <td>{detail.username}</td>
                  <td>{detail.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    }
  }
}
export default Details;
