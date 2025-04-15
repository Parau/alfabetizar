import React, { useEffect, useRef } from 'react';

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
      <a href="#" onClick={reloadIframe} aria-label="Recarregar" title="Novo livro">
        {/* Reload Icon SVG */}
        <svg width="20" height="20" viewBox="0 0 24 24" style={{ verticalAlign: 'middle' }} xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path fill="currentColor" d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"/>
        </svg>
      </a>
      &nbsp;&nbsp;
      <a href="#" onClick={expandIframe} aria-label="Expandir" title="Abrir em nova janela">
        {/* External Link Icon SVG (faExternalLinkAlt style) */}
        <svg width="20" height="20" viewBox="0 0 512 512" style={{ verticalAlign: 'middle' }} xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path fill="currentColor" d="M432 320a16 16 0 0 0-16 16v112a16 16 0 0 1-16 16H80a16 16 0 0 1-16-16V112a16 16 0 0 1 16-16h112a16 16 0 0 0 0-32H80A48 48 0 0 0 32 112v336a48 48 0 0 0 48 48h320a48 48 0 0 0 48-48V336a16 16 0 0 0-16-16zm56-320h-128a24 24 0 0 0-17 41l35 35-196 196a24 24 0 0 0 0 34l23 23a24 24 0 0 0 34 0l196-196 35 35a24 24 0 0 0 41-17V24A24 24 0 0 0 488 0z"/>
        </svg>
      </a>
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