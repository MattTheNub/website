import React from 'react'
import Header from '../components/header'
import Content from '../components/content'
import Footer from '../components/footer'

const Contact = () => {
  return (
    <>
      <Header />
      <Content>
        <p>Here are some ways you can contact me:</p>
        <ul>
          <li>
            Send me an email at{' '}
            <a href="mailto:matt@mattthenub.dev">matt@matthenub.dev</a>
          </li>
          <li>
            DM me on Twitter:{' '}
            <a
              href="https://twitter.com/MattRustacean"
              target="_blank"
              rel="noreferrer"
            >
              @MattRustacean
            </a>
          </li>
        </ul>
      </Content>
      <Footer />
    </>
  )
}

export default Contact
