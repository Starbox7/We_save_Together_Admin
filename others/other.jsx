// import React, { useState, useEffect } from 'react';

// const App = () => {
//   const [windowSize, setWindowSize] = useState({
//     width: window.innerWidth,
//     height: window.innerHeight,
//   });

//   useEffect(() => {
//     const handleResize = () => {
//       setWindowSize({
//         width: window.innerWidth,
//         height: window.innerHeight,
//       });
//     };

//     window.addEventListener('resize', handleResize);

//     return () => {
//       window.removeEventListener('resize', handleResize);
//     };
//   }, []);

//   return (
//     <div>
//       <h1>Current Window Size</h1>
//       <p>Width: {windowSize.width}px</p>
//       <p>Height: {windowSize.height}px</p>
//     </div>
//   );
// };

// export default App;

// import React from 'react';
// import styled from 'styled-components';

// const Header = styled.header`
//   height: 10%;
//   background-color: #f1f1f1;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

// const Footer = styled.footer`
//   height: 10%;
//   background-color: #f1f1f1;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

// const Container = styled.div`
//   height: 80%;
//   background-color: #eee;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

// const App = () => {
//   return (
//     <div style={{ height: '100vh' }}>
//       <Header>
//         <h1>Header</h1>
//       </Header>
//       <Container>
//         <p>This is the container with 80% height.</p>
//       </Container>
//       <Footer>
//         <h1>Footer</h1>
//       </Footer>
//     </div>
//   );
// };

// export default App;

// import React from 'react';
// import styled from 'styled-components';

// const Header = styled.header`
//   height: 10%;
//   width: 100%;
//   background-color: #f1f1f1;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

// const Footer = styled.footer`
//   height: 10%;
//   width: 100%;
//   background-color: #f1f1f1;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

// const Container = styled.div`
//   height: 80%;
//   width: 100%;
//   background-color: #eee;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

// const App = () => {
//   return (
//     <div style={{ height: '100vh' }}>
//       <Header>
//         <h1>Header</h1>
//       </Header>
//       <Container>
//         <p>This is the container with 100% width and 80% height.</p>
//       </Container>
//       <Footer>
//         <h1>Footer</h1>
//       </Footer>
//     </div>
//   );
// };

// export default App;

// import React from 'react';
// import styled from 'styled-components';

// const Header = styled.header`
//   height: 10%;
//   width: 100%;
//   background-color: #f1f1f1;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

// const Footer = styled.footer`
//   height: 10%;
//   width: 100%;
//   background-color: #f1f1f1;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

// const Container = styled.div`
//   height: 80%;
//   width: 100%;
//   background-color: #eee;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

// const TenPercentContainer = styled.div`
//   height: 10%;
//   width: 100%;
//   background-color: #ddd;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

// const App = () => {
//   return (
//     <div style={{ height: '100vh' }}>
//       <Header>
//         <h1>Header</h1>
//       </Header>
//       <Container>
//         <p>This is the container with 100% width and 80% height.</p>
//       </Container>
//       <TenPercentContainer>
//         <p>This is the container with 100% width and 10% height.</p>
//       </TenPercentContainer>
//       <Footer>
//         <h1>Footer</h1>
//       </Footer>
//     </div>
//   );
// };

// export default App;
