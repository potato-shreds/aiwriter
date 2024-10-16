type TemplateItem = {
  id: number;
  name: string;
  description: string;
  icon: string;
  tags: string;
  url: string;
};

function getLink() {
  const iosLink =
    'https://apps.apple.com/app/apple-store/id1639845219?pt=121994524&ct=edm&mt=8';
  const androidLink =
    'https://play.google.com/store/apps/details?id=com.ai.chat.writer';

  if (typeof window === 'undefined') {
    return iosLink;
  }

  const ua = (navigator.userAgent || '').toLowerCase();
  const isMac = /macintosh|mac os x/i.test(ua);
  const isApple = /iphone|ipod|ipad/i.test(ua);
  const isAndroid = /android/i.test(ua);

  if (isMac || isApple) return iosLink;
  if (isAndroid) return androidLink;

  return iosLink;
}

export const renderTemplatesContentItem = (item: any) => {
  const { id, name, description, icon, url } = item;
  const link = getLink();
  return (
    <a
      className="template__card"
      target="_blank"
      href={url}
      rel="noopener noreferrer"
      title={name}
      key={id}
    >
      <section>
        <div className="icon-list">
          {/* <div className="icon">{icon}</div> */}
        </div>

        <h3 className="title">{name}</h3>
        <p className="description">{description}</p>
      </section>
    </a>
  );
};
