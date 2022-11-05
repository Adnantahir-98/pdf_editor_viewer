import React, {useRef, useEffect} from 'react'
import WebViewer from '@pdftron/webviewer'
import './App.css'


function App() {

  const pdfViewer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    WebViewer({
        path: 'lib',
        initialDoc: '/files/SEABOB_Price-List-19-Euro_EN.pdf',
      },
      pdfViewer.current as HTMLDivElement).then((instance) => {

      });
    
  }, []);


  return (
    <div className="App">
      {/* <div className="header">React PDF Reader/Editor</div> */}
      <div className="webviewer" ref={pdfViewer}></div>
    </div>
  );
};


export default App;
