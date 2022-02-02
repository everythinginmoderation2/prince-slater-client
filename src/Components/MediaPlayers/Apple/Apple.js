import React from 'react';

const Apple = () => {
    return <div>
        {/* Apple/iTunes */}
        <iframe allow="autoplay *; encrypted-media *; fullscreen *"
            title="apple"
            frameBorder={0} height={450}
            style={{ width: '100%', maxWidth: '100%', overflow: 'hidden', background: 'transparent' }}
            sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
            src="https://embed.music.apple.com/us/album/flow-state-ii-ep/1537304415" />
    </div>;
};

export default Apple;
