"use client"
import React, { useEffect } from 'react';

const TwitterTimeline = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://platform.twitter.com/widgets.js';
    script.async = true;
    script.charset = 'utf-8';
    document.body.appendChild(script);
  }, []);

  return (
    <a
      className="twitter-timeline"
      href="https://twitter.com/Syoshi_mahjong?ref_src=twsrc%5Etfw"
      data-height="400px"
    >
      Tweets by Syoshi_mahjong
    </a>
  );
};

export default TwitterTimeline;
