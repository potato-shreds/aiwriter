import React from 'react';
import Image from 'next/image';
import '@/public/styles/overview.css';

const Overview: React.FC = () => {
  return (
    <div id="Overview" className="main">
      <div className="main-left-content">
        <div className="px-1 sm:px-0">
          <a
            href="https://www.producthunt.com/products/ai-writer-essay-email-writing"
            target="_blank"
            className="title mb-2 sm:mb-7"
            title="AI Writer on Product Hunt"
          >
            <Image
              alt="AI Writer on Product Hunt"
              src="https://appstorex.s3.us-west-2.amazonaws.com/aiwriter/product_hunt.png"
              width={200}
              height={44}
            />
          </a>
        </div>

        <section className="content">
          <div className="description sm:mb-11">
            <h1 className="main-left-content-description-title">
              Write emails, essays, articles
              <br />
              <span style={{ color: '#17ce92' }}>in seconds!</span>
            </h1>
          </div>

          <div className="info sm:mb-11">
            <div className="data store">
              <span className="data-number">#1</span>
              <span className="data-message">in the App Store US</span>
            </div>
            <div className="line"></div>
            <div className="data download">
              <span className="data-number">10M+</span>
              <span className="data-message">Downloads</span>
            </div>
            <div className="line"></div>
            <div className="data grade">
              <span className="data-number">2M+</span>
              <Image
                src="https://framerusercontent.com/images/l3ZchMJQ6OQ2Y9gaUGCyZDrRWAw.png"
                alt="grade"
                fill
                style={{ objectFit: 'contain', top: '50%' }}
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </div>
          <div className="main-right-show mobile">
            <div className="pc_image">
              <Image
                src="https://framerusercontent.com/images/6z2mCnKtylHonsilj5W4QF9rKzk.png"
                alt="iphone"
                fill
                style={{
                  objectFit: 'contain',
                  position: 'absolute',
                  top: '0',
                  left: '83px',
                }}
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </div>

          <div className="download-method">
            <div className="link">
              <p className="introduce">
                The revolutionary new way to create content powered by ChatGPT &
                GPT-4, GPT-3, and makes writing easier than ever before.
              </p>

              <div className="link-button pc">
                <a
                  target="_blank"
                  href="https://apps.apple.com/app/apple-store/id1639845219?pt=121994524&ct=edm&mt=8"
                  title="Download AI Writer IOS App"
                  className="mr-5"
                >
                  <Image
                    src="https://framerusercontent.com/images/Fz3mb2xx2AMnewszuidPDhxETp8.png"
                    alt="IOS"
                    width={168}
                    height={56}
                  />
                </a>
                <a
                  target="_blank"
                  href="https://play.google.com/store/apps/details?id=com.ai.chat.writer"
                  title="Download AI Writer Android App"
                >
                  <Image
                    src="https://framerusercontent.com/images/V3RfLHAWvhCOKga0G5tQ9R4c6g0.png"
                    alt="Google"
                    width={189}
                    height={56}
                  />
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="main-right-show pc">
        <div className="pc_image">
          <Image
            src="https://framerusercontent.com/images/6z2mCnKtylHonsilj5W4QF9rKzk.png"
            alt="Screenshot of AI Writer"
            fill
            style={{ objectFit: 'contain' }}
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </div>
    </div>
  );
};

export default Overview;
