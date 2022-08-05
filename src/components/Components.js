function Component() {
  return (
    <section className="component">
      <img className="component__image" src="" alt="" srcSet="" sizes="" />
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
