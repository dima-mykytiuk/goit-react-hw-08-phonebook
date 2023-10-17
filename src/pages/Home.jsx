import ParticlesBg from 'particles-bg'
import * as React from "react";
const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    height: '100vh',
  },
  title: {
    paddingTop: '3%',
    fontWeight: 500,
    fontSize: 48,
    textAlign: 'center',
  },

};

export default function Home() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>
        Contact manager welcome page{' '}
        <span role="img" aria-label="Phone icon">
          📞
        </span>
      </h1>
      <ParticlesBg color="#003366" type="cobweb" bg={true} />
      <ParticlesBg color="#003366" type="cobweb" bg={true} />
      <ParticlesBg color="#003366" type="cobweb" bg={true} />
      <ParticlesBg color="#003366" type="cobweb" bg={true} />
    </div>
  );
}
