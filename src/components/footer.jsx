import React from 'react'
import '../styles/footer.scss'

const Footer = () => (
  <div id="footer">
    <div className="footer-section">
      <span>Font licenses</span>
      <span>
        <a href="/fonts/licenses/roboto.txt">
          Roboto, licenced under Apache License 2.0
        </a>
      </span>
      <span>
        <a href="/fonts/licenses/legallydifferent.txt">Title font</a>, ported
        from{' '}
        <a href="/fonts/licenses/montserrat.txt">
          Montserrat, licenced under SIL OFL 1.1
        </a>
      </span>
      <span>
        Font files are available{' '}
        <a href="https://github.com/MattTheNub/website/tree/master/styles/fonts">
          on GitHub
        </a>
      </span>
    </div>
  </div>
)

export default Footer
