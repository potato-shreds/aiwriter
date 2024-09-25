type ReviewItem = {
  id: string;
  title: string;
  review_text: string;
  review_time: number;
  response_time: number;
  response_text: string;
  user: {
    name: string;
    id: string;
  };
};

const getReviewLink = () => {
  const iosLink =
    'https://apps.apple.com/app/apple-store/id1639845219?see-all=reviews';
  const androidLink =
    'https://play.google.com/store/apps/details?id=com.ai.chat.writer';
  const ua = (navigator.userAgent || '').toLowerCase();
  const isMac = /macintosh|mac os x/i.test(ua);
  const isApple = /iphone|ipod|ipad/i.test(ua);
  // const isWindows = /windows|win32/i.test(ua)
  const isAndroid = /android/i.test(navigator.userAgent);
  if (isMac || isApple) return iosLink;
  if (isAndroid) return androidLink;

  return iosLink;
};

const renderReviewItem = (item: ReviewItem) => {
  const {
    id,
    title,
    review_text,
    review_time,
    response_time,
    response_text,
    user,
  } = item;
  const reviewTime = new Date(review_time * 1000).toLocaleDateString();
  const link = getReviewLink();

  const response = (
    <div className="response">
      <div className="response__title single-line">Developer Response</div>
      <div className="response__text three-line" title={response_text}>
        {response_text}
      </div>
    </div>
  );
  return (
    <section className="review-list__item" key={id}>
      <a
        className="flex flex-col gap-3"
        target="_blank"
        href={link}
        rel="noopener noreferrer"
        title={title}
      >
        <div className="stars flex gap-1">
          <svg
            width="20"
            height="21"
            viewBox="0 0 20 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.4416 3.76235L12.9083 6.69569C13.1083 7.10402 13.6416 7.49569 14.0916 7.57069L16.7499 8.01235C18.4499 8.29569 18.8499 9.52902 17.6249 10.7457L15.5583 12.8124C15.2083 13.1624 15.0166 13.8374 15.1249 14.3207L15.7166 16.879C16.1833 18.904 15.1083 19.6874 13.3166 18.629L10.8249 17.154C10.3749 16.8874 9.63326 16.8874 9.17492 17.154L6.68326 18.629C4.89992 19.6874 3.81659 18.8957 4.28326 16.879L4.87492 14.3207C4.98326 13.8374 4.79159 13.1624 4.44159 12.8124L2.37492 10.7457C1.15826 9.52902 1.54992 8.29569 3.24992 8.01235L5.90826 7.57069C6.34992 7.49569 6.88326 7.10402 7.08326 6.69569L8.54992 3.76235C9.34992 2.17069 10.6499 2.17069 11.4416 3.76235Z"
              fill="#FBBF24"
            />
          </svg>
          <svg
            width="20"
            height="21"
            viewBox="0 0 20 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.4416 3.76235L12.9083 6.69569C13.1083 7.10402 13.6416 7.49569 14.0916 7.57069L16.7499 8.01235C18.4499 8.29569 18.8499 9.52902 17.6249 10.7457L15.5583 12.8124C15.2083 13.1624 15.0166 13.8374 15.1249 14.3207L15.7166 16.879C16.1833 18.904 15.1083 19.6874 13.3166 18.629L10.8249 17.154C10.3749 16.8874 9.63326 16.8874 9.17492 17.154L6.68326 18.629C4.89992 19.6874 3.81659 18.8957 4.28326 16.879L4.87492 14.3207C4.98326 13.8374 4.79159 13.1624 4.44159 12.8124L2.37492 10.7457C1.15826 9.52902 1.54992 8.29569 3.24992 8.01235L5.90826 7.57069C6.34992 7.49569 6.88326 7.10402 7.08326 6.69569L8.54992 3.76235C9.34992 2.17069 10.6499 2.17069 11.4416 3.76235Z"
              fill="#FBBF24"
            />
          </svg>
          <svg
            width="20"
            height="21"
            viewBox="0 0 20 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.4416 3.76235L12.9083 6.69569C13.1083 7.10402 13.6416 7.49569 14.0916 7.57069L16.7499 8.01235C18.4499 8.29569 18.8499 9.52902 17.6249 10.7457L15.5583 12.8124C15.2083 13.1624 15.0166 13.8374 15.1249 14.3207L15.7166 16.879C16.1833 18.904 15.1083 19.6874 13.3166 18.629L10.8249 17.154C10.3749 16.8874 9.63326 16.8874 9.17492 17.154L6.68326 18.629C4.89992 19.6874 3.81659 18.8957 4.28326 16.879L4.87492 14.3207C4.98326 13.8374 4.79159 13.1624 4.44159 12.8124L2.37492 10.7457C1.15826 9.52902 1.54992 8.29569 3.24992 8.01235L5.90826 7.57069C6.34992 7.49569 6.88326 7.10402 7.08326 6.69569L8.54992 3.76235C9.34992 2.17069 10.6499 2.17069 11.4416 3.76235Z"
              fill="#FBBF24"
            />
          </svg>
          <svg
            width="20"
            height="21"
            viewBox="0 0 20 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.4416 3.76235L12.9083 6.69569C13.1083 7.10402 13.6416 7.49569 14.0916 7.57069L16.7499 8.01235C18.4499 8.29569 18.8499 9.52902 17.6249 10.7457L15.5583 12.8124C15.2083 13.1624 15.0166 13.8374 15.1249 14.3207L15.7166 16.879C16.1833 18.904 15.1083 19.6874 13.3166 18.629L10.8249 17.154C10.3749 16.8874 9.63326 16.8874 9.17492 17.154L6.68326 18.629C4.89992 19.6874 3.81659 18.8957 4.28326 16.879L4.87492 14.3207C4.98326 13.8374 4.79159 13.1624 4.44159 12.8124L2.37492 10.7457C1.15826 9.52902 1.54992 8.29569 3.24992 8.01235L5.90826 7.57069C6.34992 7.49569 6.88326 7.10402 7.08326 6.69569L8.54992 3.76235C9.34992 2.17069 10.6499 2.17069 11.4416 3.76235Z"
              fill="#FBBF24"
            />
          </svg>
          <svg
            width="20"
            height="21"
            viewBox="0 0 20 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.4416 3.76235L12.9083 6.69569C13.1083 7.10402 13.6416 7.49569 14.0916 7.57069L16.7499 8.01235C18.4499 8.29569 18.8499 9.52902 17.6249 10.7457L15.5583 12.8124C15.2083 13.1624 15.0166 13.8374 15.1249 14.3207L15.7166 16.879C16.1833 18.904 15.1083 19.6874 13.3166 18.629L10.8249 17.154C10.3749 16.8874 9.63326 16.8874 9.17492 17.154L6.68326 18.629C4.89992 19.6874 3.81659 18.8957 4.28326 16.879L4.87492 14.3207C4.98326 13.8374 4.79159 13.1624 4.44159 12.8124L2.37492 10.7457C1.15826 9.52902 1.54992 8.29569 3.24992 8.01235L5.90826 7.57069C6.34992 7.49569 6.88326 7.10402 7.08326 6.69569L8.54992 3.76235C9.34992 2.17069 10.6499 2.17069 11.4416 3.76235Z"
              fill="#FBBF24"
            />
          </svg>
        </div>

        <div className="user-review">
          <h3 className="user-review__title single-line" title={title}>
            {title}
          </h3>
          <p className="user-review__text" title={review_time.toString()}>
            {review_text}
          </p>
        </div>
        <hr />
        <div className="user">
          <span>{user.name}</span>
          <span style={{ marginRight: '0.1em' }}>,</span>
          <span>{reviewTime}</span>
        </div>

        {response_time && response_text ? response : null}
      </a>
    </section>
  );
};

export default renderReviewItem;
