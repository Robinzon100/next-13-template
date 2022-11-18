import Button from 'components/lib/button/Button';

const LandingHero = () => {
  return (
    <section className="hero_landing_main">
      <div className="container">
        <div className="content">
          <h1 className="f-size-h1">
            enterprise hiring made easy
          </h1>
          <p className="f-size-p3">
            Where you join next is the single most important
            indicator of your success. <br />
            We at Leanhire enable you to get a taste of the
            future work through short term projects, even
            before you join.
          </p>
          <div className="input_with_button shadow-small">
            <input type="email" className="f-size-p3" />
            <Button
              theme='blue'
              padding={[1,1,1,1]}>
               <p className="f-size-p3">get started</p> 
            </Button>
          </div>
        </div>
        <div className="videos_container">
          <video src="" className="dark"></video>
          <video src="" className="light"></video>
        </div>
      </div>
    </section>
  );
};

export default LandingHero;