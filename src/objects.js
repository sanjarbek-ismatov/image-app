import { LazyLoadImage } from "react-lazy-load-image-component";

import "react-lazy-load-image-component/src/effects/blur.css";
let obj;
function Objects(props) {
  obj = props.list.results.map((element, index) => (
    <>
      <div>
        <a className="download" href={element.links.download}>
          Download <i class="fa fa-download"></i>
        </a>

        <LazyLoadImage
          src={element.links.download}
          delayTime="1500"
          effect="blur"
          className="img-responsive"
          key={index}
        />
        <p>{element.alt_description}</p>
      </div>
    </>
  ));
  return (
    <div className="cont">
      {obj}
      <p>
        All Rights Reserved! <br />
        Sanjarbek Ismatov 2022
      </p>
    </div>
  );
}

export default Objects;
