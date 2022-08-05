import imgMobile from "../images/image-header-mobile.jpg";
import imgDesktop from "../images/image-header-desktop.jpg";

function Component() {
  return (
    <section className="component">
      <div className="component__image-bg">
        <img
          className="component__image"
          src={imgMobile}
          alt="Three women working in an office "
          srcSet={`${imgMobile} 654w, ${imgDesktop} 540w`}
          sizes="(max-width: 960px) 654px,
        540px"
        />
      </div>
      <div className="component__main">
        <h1 className="component__title">
          Get <span className="highlight">insights</span> that help your
          business grow.
        </h1>
        <p className="component__desc">
          Discover the benefits of data analytics and make better decisions
          regarding revenue, customer experience, and overall efficiency.
        </p>
        <ul className="component__stats">
          <li className="component__li">
            <h2 className="component__li-stat">10k+</h2>
            <p className="component__li-name">companies</p>
          </li>
          <li className="component__li">
            <h2 className="component__li-stat">314</h2>
            <p className="component__li-name">templates</p>
          </li>
          <li className="component__li">
            <h2 className="component__li-stat">12m+</h2>
            <p className="component__li-name">queries</p>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Component;
