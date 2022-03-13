let obj;
function Objects(props) {
  obj = props.list.results.map((element) => (
    <>
      <div>
        <img className="img-responsive" src={element.links.download} />
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
