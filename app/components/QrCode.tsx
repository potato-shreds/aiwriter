import React from 'react';
import Image from 'next/image';

import '@/public/styles/qrCode.css';

const QrCode: React.FC = () => {
  return (
    <div className="qrCode max-w-7xl mx-auto">
      <div>
        <div className="qrCode-top">
          Join millions who have elevated productivity with AI Writer.
        </div>
        <h2 className="mx-auto section__title qrCode-title">
          Write anything in seconds.
        </h2>
      </div>
      <div className="qrCode-item-area">
        <div className="qrCode-item">
          <Image
            src="https://appstorex.s3.us-west-2.amazonaws.com/aiwriter/apple_store.png"
            alt="app_store"
            width={150}
            height={150}
          />
          <span>iPhone or iPad</span>
        </div>
        <div className="qrCode-item">
          <Image
            src="https://appstorex.s3.us-west-2.amazonaws.com/aiwriter/google_play.png"
            alt="google_play"
            width={150}
            height={150}
          />
          <span>Android</span>
        </div>
      </div>
    </div>
  );
};

export default QrCode;
