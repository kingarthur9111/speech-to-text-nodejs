import React from 'react';
import PropTypes from 'prop-types';
import { Header, Jumbotron } from 'watson-react-components';

// eslint-disable-mnext-lin =
const DESCRIPTION = 'IBM Watson Speech to Textを利用して日本語の音声をテキストに変換するプロトタイプ。';

export default function Layout(props) {
  return (
    <html lang="ja">
      <head>
        <title>議事録自動作成Demo</title>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/favicon.ico" type="image/x-icon" />
        <link rel="stylesheet" href="/css/watson-react-components.min.css" />
        <link rel="stylesheet" href="/css/style.css" />
      </head>
      <body>
        <Jumbotron
          serviceName="議事録自動作成Demo"
          repository="https://github.com/kingarthur9111/speech-to-text-nodejs"
          documentation="https://console.bluemix.net/docs/services/speech-to-text/getting-started.html"
          apiReference="http://www.ibm.com/watson/developercloud/speech-to-text/api"
          version="GA"
          serviceIcon="/images/stt.svg"
          startInBluemix=""
          description={DESCRIPTION}
        />
        <div id="root">
          {props.children}
        </div>
        <script type="text/javascript" src="scripts/bundle.js" />
      </body>
    </html>
  );
}

Layout.propTypes = {
  children: PropTypes.object.isRequired, // eslint-disable-line
  bluemixAnalytics: PropTypes.bool.isRequired,
};
