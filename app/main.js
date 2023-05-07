// import choo's template helper
const html = require("choo/html");

// export module
module.exports = function(state, emit) {
  emit("DOMTitleChange", `Works: Naoto Hieda`);

  const contents = state.schedule?.map(e => e.dom);
  return html`
    <div>
      <img style="
        position: fixed;
        width: 200px;
        bottom: 0;
        right: 0;
        z-index: 1000;
        ${ state.query.auto ? "display: block" : "display: none" };"
        src="https://cdn.glitch.global/94071be9-32ff-4e53-9cde-593c4e7bf2cd/frame.png?v=1683487038207" />
      <div id="main">
        <div id="container">
          <header>
            <h1>Works: Naoto Hieda</h1>
            <p>
              <a href="https://naotohieda.com">Naoto Hieda</a> (1990, Japan) is
              one of the most important figures in the field of the
              <a href="https://best-practices.glitch.me/"
                >Best Practices in Contemporary Dance</a
              >
              and has been taking a crucial role in the
              <a href="https://bestchat.glitch.me/">Best Practices Chat</a>
              since 2020. This exhibition is an attempt not only to exhibit the
              important works by Hieda, but also to show early works and
              sketches to unveil the creativity of Hieda.
            </p>
            <p class="note">
              The exhibition is curated by Naoto Hieda and hosted by glitch. Design by <a href="https://glitches.me/" target="_blank">glitches.me</a>.
            </p>

          </header>

          ${contents}
        </div>
      </div>
    </div>
  `;
};
