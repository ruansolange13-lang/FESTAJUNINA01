import React, { useEffect, memo, useRef } from 'react';

function VSLPlayerComponent() {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    // Injeta o script SDK da converteai se ainda não estiver presente na página
    const scriptId = 'converteai-vsl-script';
    if (!document.getElementById(scriptId)) {
      const s = document.createElement('script');
      s.id = scriptId;
      s.src = "https://scripts.converteai.net/lib/js/smartplayer-wc/v4/sdk.js";
      s.async = true;
      document.head.appendChild(s);
    }

    // Trava o atributo src e setAttribute do iframe para evitar reinicialização por scripts externos
    const iframe = iframeRef.current;
    if (iframe) {
      const originalSrc = iframe.src;
      
      // Sobrescreve a propriedade src
      try {
        Object.defineProperty(iframe, 'src', {
          get() { return originalSrc; },
          set(val) {
            console.warn('[VSL Protection] Bloqueou tentativa de alterar o src da iframe:', val);
          },
          configurable: false
        });
      } catch (e) {
        console.error('[VSL Protection] Erro ao travar propriedade src:', e);
      }

      // Sobrescreve o método setAttribute
      const originalSetAttribute = iframe.setAttribute;
      iframe.setAttribute = function(name, value) {
        if (name.toLowerCase() === 'src') {
          console.warn('[VSL Protection] Bloqueou tentativa de setAttribute src para:', value);
          return;
        }
        originalSetAttribute.call(this, name, value);
      };
    }
  }, []);

  const params = typeof window !== 'undefined' ? (window.location.search || '') : '';
  const pageUrl = typeof window !== 'undefined' ? window.location.href : '';
  const iframeSrc = `https://scripts.converteai.net/9f55019d-ac16-4a56-97cc-39f5fa062cae/players/6a217043b3dbc4620bde9aff/v4/embed.html${params}${params ? '&' : '?'}vl=${encodeURIComponent(pageUrl)}`;

  return (
    <div className="relative w-full max-w-[360px] mx-auto rounded-[2rem] overflow-hidden shadow-[0_25px_80px_-20px_rgba(231,76,60,0.3)] border-[5px] sm:border-[6px] border-[#f1c40f] bg-black">
      {/* Container fluido com o aspect-ratio exato (9:16 vertical) */}
      <div className="relative w-full aspect-[9/16] bg-neutral-950 overflow-hidden">
        <iframe
          ref={iframeRef}
          id="ifr_6a217043b3dbc4620bde9aff"
          title="Apresentação VSL"
          frameBorder="0"
          allowFullScreen
          src={iframeSrc}
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
          referrerPolicy="origin"
        />
      </div>
    </div>
  );
}

const VSLPlayer = memo(VSLPlayerComponent);
export default VSLPlayer;

