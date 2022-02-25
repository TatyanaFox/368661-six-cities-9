import React from 'react';
import {Link} from 'react-router-dom';

const stylesContainer: { container: React.CSSProperties } = {
  container: {
    minHeight: 'calc(100vh - 210px)',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    textAlign: 'center',
    fontSize: '40px',
    fontWeight: '100',
    background: 'rgba(0, 0, 0, 0.5)',
    backgroundImage: 'url(img/bg.jpg)',
    backgroundPosition: 'top',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    color: '#ffffff',
    cursor: 'default',
  },
};

const stylesLink: { link: React.CSSProperties } = {
  link: {
    position: 'absolute',
    color: 'gray',
    marginBottom: '-200px',
    marginRight: '-300px',
  },
};

function ErrorPage(): JSX.Element {
  return (
    <div style={stylesContainer.container}>
      404
      <br />
      WTF!
      <br />
      Where all the..?
      <br />
      <Link to="/" style={stylesLink.link}>
        Back
      </Link>
    </div>
  );
}

export default ErrorPage;
