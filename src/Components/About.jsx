import lady from "../assets/pizza/about.jpg";

const About = () => {
  return (
    <div className="cotainer mt-4">
      <div className="text-center">
        <h3>About Pizza</h3>
      </div>
      <div className="row">
        <div className="col-md-6">
          <img
            src={lady}
            className="img-fluid d-block mx-auto about-img"
            alt="A Lady holding a pizza"
          />
        </div>
        <div className="col-md-6 mt-4 mt-md-0">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis
            modi vitae obcaecati incidunt! Minima debitis illo ipsa dolore
            dignissimos dolor fugit facilis! Rem ea magnam doloremque! Omnis
            magnam in minus adipisci quo tempora, ea voluptates exercitationem
            dicta quaerat perspiciatis aut et commodi fugit facilis quas? Quia
            minus a architecto tenetur!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
