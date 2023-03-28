import typ1 from "../assets/pizza/typ1.jpg";
import typ2 from "../assets/pizza/typ2.jpg";
import typ3 from "../assets/pizza/typ3.jpg";
import typ4 from "../assets/pizza/typ4.jpg";

const PizzaTypes = () => {
  return (
    <div className="container type mt-5">
      <div className="text-center">
        <h3>Pizza Types</h3>
      </div>
      <div className="row mt-3">
        <div className="col-md-6 col-lg-3">
          <div className="card">
            <img src={typ1} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-3">
          <div className="card">
            <img src={typ2} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-3">
          <div className="card">
            <img src={typ3} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-3">
          <div className="card">
            <img src={typ4} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PizzaTypes;
