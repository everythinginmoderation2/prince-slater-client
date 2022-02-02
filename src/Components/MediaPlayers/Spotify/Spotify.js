import React from 'react';

const Spotify = () => {
    return <div>
        {/* Spotify */}
        <iframe style={{ borderRadius: '12px' }}
            title="spotify"
            src="https://open.spotify.com/embed/artist/3KSgfnFDc3bjDC75U4oUfo?utm_source=generator"
            width="100%" height={450} frameBorder={0}
            allowFullScreen
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" />
    </div>;
};

export default Spotify;
