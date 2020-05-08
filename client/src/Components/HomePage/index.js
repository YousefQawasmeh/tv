import React from "react";
import axios from "axios";
import "./index.css";
import loading from "./../../loading.gif";
class HomePage extends React.Component {
  state = { urls: [] };
  componentDidMount() {
    axios
      .get("/api/links")
      .then(({ data }) => {
        console.log(data);
        this.setState({ urls: data });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    return (
      <div>
        <div className='constener'>
          {this.state.urls.length ? (
            this.state.urls.map((url) => {
              return (
                <a className='url-a' href={url.url}>
                  <div className='url-contener'>
                    <img src={url.img} />
                    <h1>{url.name}</h1>
                    <p>{url.description}</p>
                  </div>
                </a>
              );
            })
          ) : (
            <img className='loading-img' src={loading} />
          )}
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <a href='/add-link'>
          <h2>اضافة رابط جديد</h2>
        </a>
      </div>
    );
  }
}
export default HomePage;
