import Image from 'next/image';
import './styles.css';
import Footer from '@/app//components/Footer';
import config from '@/data/config';
const page = () => {
  return (
    <>
      <div className="mx-10 box-border">
        <div className="max-w-7xl mx-auto m-10 bg p-20">
          <header>
            <h1 className="text-xl sm:text-6xl text-center font-bold">
              Thank You Email After Interview Templates: How to Write & Examples
            </h1>
          </header>
          <div className="flex justify-center mt-10">
            <button className="bg-black text-white px-3 py-2 sm:px-6 sm:py-5 rounded-md">
              <a
                href={config.httpUrl + 'ai-email-writer-email-generator'}
                title="Write Email To Professor"
              >
                Write Thank You Email After Interview
              </a>
            </button>
          </div>
        </div>
        <main>
          <section className="mt-10 bg-teal-50 p-10 rounded-lg mb-10">
            <div className="bg-white p-10 max-w-6xl mx-auto">
              <hr className="border-t-2 border-gray-300 mb-4 mt-10"></hr>
              <article className="max-w-4xl mx-auto mt-10 margin-p">
                <h2 className="text-3xl font-bold">
                  3 Email Templates for Thanking Your Interviewer
                </h2>
                <section>
                  <h3>Template 1: General Thank You</h3>
                  <p>
                    <strong>Subject:</strong> Thank you for your time - [Your
                    Name]
                  </p>
                  <p>Dear [Interviewer&apos;s Name],</p>
                  <p>
                    Thank you so much for taking the time to interview me for
                    the [Position] role at [Company Name]. I was very impressed
                    with [specific detail about the company or interview].
                  </p>
                  <p>
                    I am particularly interested in [mention specific aspect of
                    the role that appeals to you]. I believe my skills in [list
                    relevant skills] would be a valuable asset to your team.
                  </p>
                  <p>
                    Thank you again for your time and consideration. I look
                    forward to hearing from you soon.
                  </p>
                  <p>Sincerely, [Your Name] [Your Email] [Your Phone Number]</p>
                </section>
                <section>
                  <h3>
                    Template 2: Emphasizing a Specific Skill or Experience
                  </h3>
                  <p>
                    <strong>Subject:</strong> Following up on our interview -
                    [Your Name]
                  </p>
                  <p>Dear [Interviewer&apos;s Name],</p>
                  <p>
                    I wanted to thank you once again for meeting with me last
                    [day]. I was very excited to learn more about the [Position]
                    role at [Company Name].
                  </p>
                  <p>
                    During our conversation, I was particularly eager to discuss
                    my experience with [specific skill or experience]. I believe
                    my [mention specific achievement or accomplishment] aligns
                    well with the requirements of this position.
                  </p>
                  <p>
                    Thank you for your time and consideration. I look forward to
                    hearing from you soon.
                  </p>
                  <p>Sincerely, [Your Name] [Your Email] [Your Phone Number]</p>
                </section>
                <section>
                  <h3>Template 3: Expressing Enthusiasm and Follow-up</h3>
                  <p>
                    <strong>Subject:</strong> Re: [Position] Interview - [Your
                    Name]
                  </p>
                  <p>Dear [Interviewer&apos;s Name],</p>
                  <p>
                    Thank you again for taking the time to interview me for the
                    [Position] role. I was very impressed with [mention
                    something specific about the company or interview].
                  </p>
                  <p>
                    I am truly excited about the opportunity to contribute to
                    the team at [Company Name]. I believe my skills and
                    experience in [list relevant skills] would be a great fit
                    for this role.{' '}
                  </p>
                  <p>
                    I have attached my resume for your reference. Please do not
                    hesitate to contact me if you require any further
                    information.
                  </p>
                  <p>Thank you for your time and consideration. </p>
                  <p>Sincerely, [Your Name] [Your Email] [Your Phone Number]</p>
                </section>
              </article>
            </div>
          </section>
          <div className="mt-10 p-10 rounded-lg mb-10">
            <div className="bg-white p-10 max-w-6xl mx-auto flex flex-col items-center">
              <div className="">
                <h2 className="sm:text-5xl font-bold ">How it works</h2>
              </div>
              <div className="flex flex-col sm:flex-row items-center w-full mt-16 ">
                <div className="bg-purple-50 sm:p-8 flex-1 mb-5 sm:mb-0">
                  <Image
                    src="/images/6297c0caffa00e75739ceb0b_step-1.svg"
                    alt="SVG"
                    width={800}
                    height={300}
                  />
                </div>
                <div className="flex-1 sm:ml-14">
                  <div className="flex items-center">
                    <div className="p-5 bg-black text-white text-base rounded-full w-10 h-10 flex items-center justify-center ">
                      1
                    </div>
                    <div className="ml-2 sm:text-2xl font-bold">
                      Enter what you need to write
                    </div>
                  </div>
                  <div className="px-10 mt-5">
                    <p className="sm:text-sm">
                      Choose from emails, social posts, long-form blog posts,
                      and more!
                    </p>
                  </div>
                </div>
              </div>
              <div className="px-20 my-4">
                <Image
                  src="/images/628288c5cd3e84f1470a378c_line_right.svg"
                  alt="SVG"
                  width={400}
                  height={300}
                />
              </div>
              <div className="flex flex-col-reverse sm:flex-row  items-center w-full">
                <div className="flex-1 sm:ml-14 ">
                  <div className="flex items-center">
                    <div className="p-5 bg-black text-white text-base rounded-full w-10 h-10 flex items-center justify-center ">
                      2
                    </div>
                    <div className="ml-2 sm:text-2xl font-bold">
                      Give AI Writer a bit of context
                    </div>
                  </div>
                  <div className="px-10 mt-5">
                    <p className="sm:text-sm">
                      Enter a few sentences about your project/campaign.
                    </p>
                  </div>
                </div>
                <div className="bg-purple-50 sm:p-8 flex-1 mb-5 sm:mt-0">
                  <Image
                    src="/images/6297c0cab1392750c5d86460_step-2.svg"
                    alt="SVG"
                    width={800}
                    height={300}
                  />
                </div>
              </div>
              <div className="px-20 my-4">
                <Image
                  src="/images/628288c5cd3e84727f0a378f_line_left.svg"
                  alt="SVG"
                  width={400}
                  height={300}
                />
              </div>
              <div className="flex flex-col sm:flex-row items-center w-full">
                <div className="bg-purple-50 sm:p-8 flex-1 mb-5 sm:mb-0">
                  <Image
                    src="/images/3.png"
                    alt="SVG"
                    width={800}
                    height={300}
                  />
                </div>
                <div className="flex-1 sm:ml-14">
                  <div className="flex items-center">
                    <div className="p-5 bg-black text-white text-base rounded-full w-10 h-10 flex items-center justify-center ">
                      3
                    </div>
                    <div className="ml-2 sm:text-2xl font-bold">
                      Sift through the results
                    </div>
                  </div>
                  <div className="px-10 mt-5">
                    <p className="sm:text-sm">
                      Our AI content generator gives you multiple options for
                      each campaign that you’re working on.
                    </p>
                  </div>
                </div>
              </div>
              <div className="px-20 my-4">
                <Image
                  src="/images/628288c5cd3e84d55f0a378e_line_middle-from-left.svg"
                  alt="SVG"
                  width={400}
                  height={300}
                />
              </div>
              <div className="flex-1 flex flex-col items-center margin-p2 ">
                <h2 className="sm:text-3xl font-bold">Ready to level-up?</h2>
                <p>
                  Write 10x faster, engage your audience, & never struggle with
                  the blank page again.
                </p>
                {/* <p>Get Started for Free</p> */}
                <p>No credit card required</p>
                <p>2,000 free words per month</p>
                <p>90+ content types to explore</p>
                <button className="bg-black text-white px-3 py-2 sm:px-6 sm:py-5 rounded-md mt-5">
                  <a
                    href={config.httpUrl + 'ai-email-writer-email-generator'}
                    title="Write Email To Professor"
                  >
                    Get Started for Free
                  </a>
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
};

export const metadata = {
  title: 'Thank You Email After Interview Templates: How to Write & Examples',
  description:
    'Discover effective thank you email templates for after your interview. Learn how to express gratitude, reinforce your interest in the position, and make a positive impression with our tips and examples.',
  keywords:
    'Thank You Email After Interview Templates, Interview Thank You Email, Writing Thank You Emails, Thank You Email Examples, Post-Interview Follow-Up, Professional Thank You Email, Expressing Gratitude',
};

export default page;
