import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <header>
          <a className="aHeader headerSettings" href='/settings'>Settings</a>
          <a className="aHeader">Reports</a>
          <a className="aHeader">Moderators</a>
          <a className="aHeader">Users</a>
          <a className="aHeader">Ban list</a>
        </header>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
