const Projects = () => {
  return (
    <>
      <h2>Projects</h2>
      <div className="container">
        <div className="proj">
          <i className="fa-solid fa-lightbulb"></i>
          <h4>Instant Server Start</h4>
          <p>On demand file serving over native ESM, no bundling required!</p>
        </div>
        <div className="proj">
          <i className="fa-solid fa-bolt"></i>
          <h4>Lightning Fast HMR</h4>
          <p>
            Hot Module Replacement (HMR) that stays fast regardless of app size.
          </p>
        </div>
        <div className="proj">
          <i className="fa-solid fa-screwdriver-wrench"></i>
          <h4>Rich Features</h4>
          <p>Out-of-the-box support for TypeScript, JSX, CSS and more.</p>
        </div>
        <div className="proj">
          <i className="fa-solid fa-box"></i>
          <h4>Optimized Build</h4>
          <p>
            Pre-configured Rollup build with multi-page and library mode
            support.
          </p>
        </div>
        <div className="proj">
          <i className="fa-solid fa-screwdriver"></i>
          <h4>Universal Plugins</h4>
          <p>Rollup-superset plugin interface shared between dev and build.</p>
        </div>
        <div className="proj">
          <i className="fa-solid fa-key"></i>
          <h4>Fully Typed APIs</h4>
          <p>Flexible programmatic APIs with full TypeScript typing.</p>
        </div>
      </div>
    </>
  );
};

export default Projects;
