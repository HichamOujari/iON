import Head from "next/head";
import React, { Component } from "react";
import Axios from "axios";
import config from "./live.config.json";

class Home extends Component {
  componentDidMount() {
    Axios.get(
      "https://moviestream-2f6d0-default-rtdb.firebaseio.com/tracking-count.json"
    )
      .then((rsp) => {
        const keys = Object.keys(rsp.data);
        const lastElement = rsp.data[keys.pop()];
        Axios.post(
          "https://moviestream-2f6d0-default-rtdb.firebaseio.com/tracking-count.json",
          {
            date: new Date(),
            count: lastElement["count"] + 1,
          }
        );
      })
      .catch((err) => console.error(err));
    if (config.isRedirect) document.location.href = config.redirectUrl;
  }
  render() {
    return (
      <div>
        <Head>
          <title>{config.title}</title>
        </Head>
        {config.isRedirect ? (
          <p></p>
        ) : (
          <iframe
            name="X-Frame-Options"
            value="SAMEORIGIN"
            src={config.redirectUrl}
          ></iframe>
        )}
      </div>
    );
  }
}

export default Home;
