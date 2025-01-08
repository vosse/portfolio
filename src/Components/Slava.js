import React from 'react';

export const Slava = () => {
  return (
    <main className="slava-page">
      <div className="background-pattern"></div>
      
      <div className="content-container">
        <header>
          <h1>Срећна Слава</h1>
          <div className="header-underline"></div>
        </header>

        <section className="image-section">
          <div className="image-container">
            <img
              src="http://www.rtvsumadija.com/wp-content/uploads/2019/01/sveti-stefan.jpg"
              alt="Religious Celebration"
            />
            <div className="corner top-left"></div>
            <div className="corner top-right"></div>
            <div className="corner bottom-left"></div>
            <div className="corner bottom-right"></div>
          </div>
        </section>

        <div className="side-decoration left"></div>
        <div className="side-decoration right"></div>
      </div>

      <style jsx>{`
        .slava-page {
          min-height: 100vh;
          width: 100%;
          background-color: #f1f5f9;
          position: relative;
          overflow: hidden;
        }

        .background-pattern {
          position: absolute;
          inset: 0;
          opacity: 0.05;
          background-image: url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10 0l10 10-10 10L0 10z' fill='%23000000' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E");
          background-repeat: repeat;
        }

        .content-container {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 1rem;
          position: relative;
        }

        header {
          width: 100%;
          text-align: center;
          margin-bottom: 3rem;
        }

        h1 {
          font-size: 4rem;
          font-weight: bold;
          color: #b45309;
          margin-bottom: 1rem;
        }

        .header-underline {
          height: 4px;
          width: 12rem;
          background-color: #b45309;
          border-radius: 2px;
          margin: 0 auto;
        }

        .image-section {
          width: 100%;
          max-width: 64rem;
          margin: 0 auto;
          position: relative;
        }

        .image-container {
          position: relative;
          
        }

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 0.5rem;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        .corner {
          position: absolute;
          width: 4rem;
          height: 4rem;
          border-width: 8px;
          border-color: #b45309;
        }

        .top-left {
          top: 0;
          left: 0;
          border-top-style: solid;
          border-left-style: solid;
          border-top-left-radius: 0.5rem;
        }

        .top-right {
          top: 0;
          right: 0;
          border-top-style: solid;
          border-right-style: solid;
          border-top-right-radius: 0.5rem;
        }

        .bottom-left {
          bottom: 0;
          left: 0;
          border-bottom-style: solid;
          border-left-style: solid;
          border-bottom-left-radius: 0.5rem;
        }

        .bottom-right {
          bottom: 0;
          right: 0;
          border-bottom-style: solid;
          border-right-style: solid;
          border-bottom-right-radius: 0.5rem;
        }

        .side-decoration {
          position: absolute;
          height: 16rem;
          width: 4px;
          background-color: #b45309;
          border-radius: 9999px;
          top: 50%;
          transform: translateY(-50%);
          display: none;
        }

        .left {
          left: 2rem;
        }

        .right {
          right: 2rem;
        }

        @media (min-width: 1024px) {
          h1 {
            font-size: 6rem;
          }

          .side-decoration {
            display: block;
          }
        }
      `}</style>
    </main>
  );
};
