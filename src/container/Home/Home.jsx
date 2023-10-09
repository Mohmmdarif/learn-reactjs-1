import React, { Component } from "react";
import YoutubeComponent from "../../component/YoutubeComponent/YoutubeComponent";
import Product from "./Product/Product";

class Home extends Component {
  render() {
    return (
      <>
        <YoutubeComponent
          title="Tutorial React JS - Bagian 1"
          time="7.12"
          desc="1rb x ditonton. 2 hari yang lalu"
        />
        ;
        <YoutubeComponent
          title="Tutorial React JS - Bagian 2"
          time="8.42"
          desc="100rb x ditonton. 5 hari yang lalu"
        />
        ;
        <YoutubeComponent
          title="Tutorial React JS - Bagian 3"
          time="5.52"
          desc="800 x ditonton. 23 menit yang lalu"
        />
        ;
        <YoutubeComponent
          title="Tutorial React JS - Bagian 4"
          time="3.04"
          desc="1jt x ditonton. 2 hari yang lalu"
        />
        ;
        <hr />
        <Product />
      </>
    );
  }
}

export default Home;
