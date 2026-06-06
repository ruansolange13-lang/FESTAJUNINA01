import React, { useEffect, useState, memo } from 'react';

function VSLPlayerComponent() {
  const [iframeSrc, setIframeSrc] = useState<string>('');

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

    // Define o source correto do iframe no momento de montagem
    const params = window.location.search || '';
    const pageUrl = window.location.href;
    const url = `https://scripts.converteai.net/9f55019d-ac16-4a56-97cc-39f5fa062cae/players/6a217043b3dbc4620bde9aff/v4/embed.html${params}${params ? '&' : '?'}vl=${encodeURIComponent(pageUrl)}`;
    setIframeSrc(url);
  }, []);

  return (
    <div className="relative w-full max-w-[360px] mx-auto rounded-[2rem] overflow-hidden shadow-[0_25px_80px_-20px_rgba(231,76,60,0.3)] border-[5px] sm:border-[6px] border-[#f1c40f] bg-black">
      {/* Container fluido com o aspect-ratio exato (9:16 vertical) */}
      <div className="relative w-full aspect-[9/16] bg-neutral-950 overflow-hidden">
        {iframeSrc && (
          <iframe
            id="ifr_6a217043b3dbc4620bde9aff"
            title="Apresentação VSL"
            frameBorder="0"
            allowFullScreen
            src={iframeSrc}
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
            referrerPolicy="origin"
          />
        )}
      </div>
    </div>
  );
}

const VSLPlayer = memo(VSLPlayerComponent);
export default VSLPlayer;

