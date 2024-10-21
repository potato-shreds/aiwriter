import React from 'react';
import Footer from '@/app//components/Footer';
import './page.css';
import Image from 'next/image';

const support: React.FC = () => {
  return (
    <div className="h-screen flex flex-col justify-between">
      <div id="contents" className="bg-white max-w-2xl mx-auto py-40">
        <h1 className="text-3xl font-bold mb-14 flex items-center ">
          <img
            alt=""
            src="https://lh7-rt.googleusercontent.com/u/0/docsd/ANZ-HvDeQu-LgMffygbRkMedDhM0rTUSbuuXo68_lQ4OicgmxflRjVAk3NW42NV9PMvw8YhkK7hLCqUboPKBTCSVFOMRTQuDT9V5QBZCXS6vCGM-Hkp-14k8lP1ZSPq52lIC2BslHvj8aTN5GytqOhCkw9PMh_9tpMgvEXrDkYhHmTuDe3d2oNph3GjIlamNIkaza-iMAF_OvyvBADQs16nsLm-p-jZCpePovzJ_HTafXATBdVGU7wu_tFqBDbVTlEG4vcY-i7UgTdLtMM_CQPPq10zV3L9h5BGZ0yc_ghyTG7gOlK4zXV6euABi0GuBOFqu0PCM3rXPqDYZ8nfA7cdyT38tbs7RBi_r2r2Vd6wSA4tyR9HYajz9looc71XueUgFmGOuoIEp2C9jPXzd0EfODKM2V4PrJR9oS4BpLVof3s3JQkzm-Kp4SIezHUTqPe50zWWP-mGWGeDh_uX9bef-j_ktPWERzLTvXjwwGSXf9IwHk2zgJhoTE06WcQybgZpM8pn2X1h-2LKBw18oy9K3GWIpT9bl75gC1HtJ4i2fOEruuPCoU6FOMLpxGjG9RHvgJtHjD1eOA-1lCZicMWjGKaz5hwL3fiYXYTR0hw_TA5WQxQlJ7RFQKdwj9VmNCxT6cLiqLSnpP5r_qucauC4jXB9Qzq12wkf7EWL4r0FTDsHmHPtvUDg8At3kPEBMfRyzNBWqHKAcAjG1CyGKf6JM00qcr5fiwY0d0JOER7WOMLr6Svkkeo25nmnxtD1D-opMVncg75E4kF6fCtafP3EUCI9O_TEw4-2-33mJfdQIMK_dMl5uvNRW8LmK6cGITkVwjgm8QNAiVeQ2AoJ9ggyAgmlv3pCYSlJ0qN2g2uoZUSm9aAzyDyKpBP4YDW0j_Vk9Ip7xuSkB-4TawLhgCtHBVa8IaXQycEo3LlUHlc5ykOkW4nEoIwvyDVA"
            className="w-20 h-20 rounded-lg mr-5"
          />
          AI Writer
        </h1>
        <p className="text-xl mb-2">Hi,</p>
        <p className="text-xl mb-4">Welcome to AI Writer!</p>
        <p className="text-xl mb-2 ">
          If you have any questions about our service or any related matters,
          please contact us via email at{' '}
          <a
            className="text-blue-500 underline"
            href="mailto:ai.writer@outlook.com"
          >
            ai.writer@outlook.com
          </a>
          .
        </p>
        <p className="text-base mt-10">
          <a className="text-blue-500 underline" href="https://ai-writer.app">
            Go Back to Home Page for More Information!
          </a>
        </p>
      </div>
      <div>
        <div className="footer">
          <footer>
            <div className="max-w-7xl m-auto">
              <div className="top mb-8 text-white items-center justify-between flex">
                <a
                  href="#"
                  className="logo h-full flex items-center mr-8 mb-2 md:mb-0"
                >
                  <Image
                    src="/images/app_logo.png"
                    alt="logo"
                    width={141}
                    height={40}
                  />
                </a>
                <div className="flex items-center justify-end gap-8">
                  <a
                    href="https://www.youtube.com/@ai_writer_app"
                    target="_blank"
                    title="AI Writer YouTube"
                  >
                    <svg
                      width="24"
                      height="25"
                      viewBox="0 0 24 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_4398_5121)">
                        <path
                          d="M23.8423 7.81193C23.8423 5.70256 22.2907 4.00568 20.3735 4.00568C17.7767 3.88428 15.1282 3.8374 12.4217 3.8374H11.5779C8.87792 3.8374 6.2248 3.88428 3.62792 4.00615C1.71542 4.00615 0.163859 5.7124 0.163859 7.82178C0.0466718 9.49006 -0.00301573 11.1588 -0.000203231 12.8276C-0.00489073 14.4963 0.0482343 16.1666 0.159172 17.8385C0.159172 19.9479 1.71073 21.6588 3.62323 21.6588C6.35136 21.7854 9.1498 21.8416 11.9951 21.8369C14.8451 21.8463 17.6357 21.7869 20.367 21.6588C22.2842 21.6588 23.8357 19.9479 23.8357 17.8385C23.9482 16.1651 23.9998 14.4963 23.9951 12.8229C24.0057 11.1541 23.9548 9.48381 23.8423 7.81193ZM9.70292 17.426V8.21506L16.4998 12.8182L9.70292 17.426Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_4398_5121">
                          <rect
                            width="24"
                            height="24"
                            fill="white"
                            transform="translate(0 0.837402)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </a>
                </div>
              </div>
              <div
                className="bottom flex flex-wrap justify-center"
                style={{ color: 'rgb(255, 255, 255)' }}
              >
                <div className="copyright text-center sm:text-left">
                  © Copyright 2024, All Rights Reserved
                </div>

                <div className="sections flex-1 flex gap-4 justify-center py-4 sm:py-0">
                  <div className="section">
                    <a target="_blank" href="/policy" title="Privacy">
                      Privacy
                    </a>
                  </div>
                  <span>·</span>
                  <div className="section">
                    <a target="_blank" href="/terms" title="Terms of Use">
                      Terms of Use
                    </a>
                  </div>
                  <span>·</span>
                  <div className="section">
                    <a target="_blank" href="/support" title="Support">
                      Support
                    </a>
                  </div>
                </div>

                <div className="contact-us">
                  <a
                    href="mailto:ai.writer@outlook.com"
                    rel="noopener noreferrer"
                    title="Contact Us"
                  >
                    Contact Us: ai.writer@outlook.com
                  </a>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
      <div className="hidden">
        <Footer />
      </div>
    </div>
  );
};

export default support;
