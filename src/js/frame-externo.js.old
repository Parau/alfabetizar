import React, { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRedo, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'

const FrameExterno = (props) => {
  const iframeRef = useRef(null);
  
  useEffect(() => {
    // Check if window exists (for SSR compatibility)
    if (typeof window === 'undefined') return;
    
    window.theCallData = "";
    
    const messageHandler = function (theEvent) {
      if (theEvent.data[0] === "openUrl") {
        console.log("Origem do evento:", theEvent.origin);
        window.theCallData = theEvent.data[1];
        window.open(window.theCallData, "_blank");
      }
    };
    
    window.addEventListener("message", messageHandler, false);
    
    // Clean up event listener when component unmounts
    return () => {
      window.removeEventListener("message", messageHandler, false);
    };
  }, []);

  function expandIframe(e) {
    e.preventDefault();
    if (iframeRef.current && iframeRef.current.contentWindow) {
      iframeRef.current.contentWindow.postMessage(["expand", "CALL FROM PARENT "], "*");
      console.log("expandIframe");
    }
  }

  function reloadIframe(e) {
    e.preventDefault();
    if (iframeRef.current) {
      iframeRef.current.src = 'https://livros.aprender.digital';
    }
  }

  return (
    <header style={{ textAlign: 'right' }}>
      <a href="#" onClick={reloadIframe} aria-label="Recarregar"><FontAwesomeIcon icon={faRedo} size="1x" color="grey" /></a>
      &nbsp;&nbsp;
      <a href="#" onClick={expandIframe} aria-label="Expandir"><FontAwesomeIcon icon={faExternalLinkAlt} size="1x" color="grey" /></a>
      <iframe 
        ref={iframeRef}
        id="iframe-o-nome-da-gente" 
        width="100%" 
        height="450px" 
        src="https://livros.aprender.digital/"
        title="O Nome da Gente"
      />
    </header>
  );
}

export default FrameExterno;