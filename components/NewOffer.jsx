import React, { useEffect } from 'react';

const NewOffer = () => {
  useEffect(() => {
    const handleWheel = (evt) => {
      evt.preventDefault();  // Prevent default scroll behavior
      document.documentElement.scrollLeft += evt.deltaY;  // Adjust horizontal scroll position
    };

    // Add the wheel event listener to the whole document
    document.addEventListener('wheel', handleWheel, { passive: false });

    // Cleanup the event listener when the component is unmounted
    return () => {
      document.removeEventListener('wheel', handleWheel);
    };
  }, []);

  return (
    <div>
      <main style={styles.main}>
        <section style={styles.section}>
          <h1>Beep</h1>
        </section>
        <section style={styles.section}>
          <h1>Boop</h1>
        </section>
        <section style={styles.section}>
          <h1>Boooom</h1>
        </section>
        <section style={styles.section}>
          <h1>The End</h1>
        </section>
      </main>

      <a 
        href="https://alvarotrigo.com/blog/scroll-horizontally-with-mouse-wheel-vanilla-java/" 
        target="_blank" 
        style={styles.readArticle} 
        className="read-article">
        Read the article 👉
      </a>
    </div>
  );
};

const styles = {
  main: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row', // Make sure sections are arranged horizontally
    height: '100vh', // Set height to 100% of the viewport height
  },
  section: {
    minWidth: '100vw', // Set each section to take full viewport width
    minHeight: '100vh', // Set each section to take full viewport height
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '4ch',
  },
  readArticle: {
    position: 'absolute',
    top: '10px',
    left: '10px',
    zIndex: 999,
    color: '#000',
    background: 'white',
    padding: '10px 20px',
    borderRadius: '10px',
    fontFamily: 'Arial',
    textDecoration: 'none',
    boxShadow: 'rgb(50 50 93 / 25%) 0 0 100px -20px, rgb(0 0 0 / 30%) 0 0 60px -15px',
  },
};

export default NewOffer;
