const writingToolsHeaderData = [
  {
    tool_type_label: 'General Writing',
    tool_list: [
      {
        id: 871,
        icon_address: '/tool-icon/paragraphgenerator.svg',
        tool_name: 'Paragraph Generator',
        tool_url: 'https://writer.hix.ai/paragraph-generator',
        icon_class_name: 'i-cus--tools-article-generator',
      },
      {
        id: 867,
        icon_address: '/tool-icon/article-rewriter.svg',
        tool_name: 'Article Rewriter',
        tool_url: 'https://writer.hix.ai/paraphrasing-tool/article-rewriter',
        icon_class_name: 'i-cus--tools-paragraph-generator',
      },
      {
        id: 866,
        icon_address: '/tool-icon/paraphrasingtool.svg',
        tool_name: 'Paraphrasing Tool',
        tool_url: 'https://writer.hix.ai/paraphrasing-tool',
      },
      {
        id: 26,
        icon_address: '/tool-type-icon/articles-seo.svg',
        tool_name: 'Essay Writer',
        tool_url: 'https://chat.openai.com/g/g-ROMeAq3Q6-essay-writer',
      },
      {
        id: 2009,
        icon_address: '/tool-icon/paragraphgenerator.svg',
        tool_name: 'AI Text Generator',
        tool_url: 'https://writer.hix.ai/ai-text-generator',
        icon_class_name: 'i-cus--tools-ai-writer-comparisons',
      },
      {
        id: 864,
        icon_address: '/tool-icon/SentenceExpander.svg',
        tool_name: 'Sentence Expander',
        tool_url: 'https://writer.hix.ai/sentence-expander',
      },
      {
        id: 38,
        icon_address: '/tool-type-icon/articles-seo.svg',
        tool_name: 'Paragraph Rewriter',
        tool_url: 'https://chat.openai.com/g/g-xhAQlXucy-paragraph-rewriter',
      },
      {
        id: 1442,
        icon_address: '/tool-icon/sentencegenerator.svg',
        tool_name: 'Sentence Generator',
        tool_url: 'https://writer.hix.ai/sentence-generator',
      },
      {
        id: 1513,
        icon_address: '/tool-icon/cus-paragraph-scrambler.svg',
        tool_name: 'Plagiarism Remover',
        tool_url: 'https://writer.hix.ai/plagiarism-remover',
      },
    ],
  },
  {
    tool_type_label: 'Assistant Writing',
    tool_list: [
      {
        id: 1082,
        icon_address: '/tool-icon/grammarchecker.svg',
        tool_name: 'Grammar Checker',
        tool_url: 'https://writer.hix.ai/grammar-checker',
      },
      {
        id: 1383,
        icon_address: '/tool-icon/proofreader-icon-01.svg',
        tool_name: 'Online Proofreader',
        tool_url: 'https://writer.hix.ai/proofreader',
      },
      {
        id: 865,
        icon_address: '/tool-icon/summarizer.svg',
        tool_name: 'Text & PDF Summarizer',
        tool_url: 'https://writer.hix.ai/summarizer',
      },

      {
        id: 9,
        icon_address: '/tool-type-icon/articles-seo.svg',
        tool_name: 'ChatPDF',
        tool_url: 'https://chat.openai.com/g/g-lijo49FhM-chatpdf',
      },

      {
        id: 21,
        tool_name: 'Spell Checker',
        tool_url: 'https://chat.openai.com/g/g-yYgfFuy8j-spell-checker',
        icon_address: '/tool-type-icon/articles-seo.svg',
      },
      {
        id: 100000,
        tool_name: 'AI Translator',
        tool_url: 'https://translate.hix.ai',
        icon_address: '/tool-icon/BiSolidCheckShield.svg',
      },
      {
        id: 1432,
        icon_address: '/tool-icon/BiSolidCheckShield.svg',
        tool_name: 'Plagiarism Checker',
        tool_url: 'https://writer.hix.ai/plagiarism-checker',
      },

      {
        id: 1382,
        icon_address: '/tool-icon/punctuationchecker-icon-01.svg',
        tool_name: 'Punctuation Checker',
        tool_url: 'https://writer.hix.ai/punctuation-checker',
      },
    ],
  },
  {
    tool_type_label: 'Creative Writing',
    tool_list: [
      {
        id: 1399,
        icon_address: '/tool-icon/promptgenerator-icon-01.svg',
        tool_name: 'Prompt Generator',
        tool_url: 'https://writer.hix.ai/prompt-generator',
      },
      {
        id: 1420,
        icon_address: '/tool-icon/airesponsegenerator-icon-01.svg',
        tool_name: 'AI Response Generator',
        tool_url:
          'https://writer.hix.ai/ai-email-writer-email-generator/ai-response-generator',
      },
      {
        id: 1067,
        icon_address: '/tool-icon/hashtaggenerate.svg',
        tool_name: 'Hashtag Generator',
        tool_url: 'https://writer.hix.ai/hashtag-generator',
      },
      {
        id: 1138,
        icon_address: '/tool-icon/slogangenerator-icon-01.svg',
        tool_name: 'Slogan Generator',
        tool_url: 'https://writer.hix.ai/slogan-generator',
      },
      {
        id: 1375,
        icon_address: '/tool-icon/twitter.svg',
        tool_name: 'Tweet & Threads Generator',
        tool_url: 'https://writer.hix.ai/tweet-generator',
      },
      {
        id: 1057,
        icon_address: '/tool-icon/landingpagesubheader.svg',
        tool_name: 'Instagram Caption Generator',
        tool_url: 'https://writer.hix.ai/instagram-caption-generator',
      },
      {
        id: 1387,
        icon_address: '/tool-icon/scriptgenerator-icon-01.svg',
        tool_name: 'Script Generator',
        tool_url: 'https://writer.hix.ai/script-generator',
      },
      {
        id: 1356,
        icon_address: '/tool-icon/songlyrics-icon-01.svg',
        tool_name: 'Song Lyrics Generator',
        tool_url: 'https://writer.hix.ai/song-lyrics-generator',
      },
      {
        id: 1091,
        icon_address: '/tool-icon/aistorygenerator-icon-01.svg',
        tool_name: 'AI Story Generator',
        tool_url: 'https://writer.hix.ai/story-generator',
      },
    ],
  },
];

const aiAppsData = [
  {
    app_url: 'https://ainotebook.app/',
    app_name: 'AI Note Taker: Voice,Image,Web',
    title: 'AI Notebook',
  },
  {
    app_url:
      'https://apps.apple.com/us/app/ai-keyboard-write-auto-reply/id6472762486',
    app_name: 'AI Keyboard: Auto Type & Reply',
    title: 'AI Keyboard',
  },
  {
    app_url:
      'https://apps.apple.com/us/app/ai-photo-enhancer-photo-maker/id1563607678',
    app_name: 'Photo AI: Enhancer & Generator',
    title: 'Photo AI',
  },
  {
    app_url:
      'https://apps.apple.com/us/app/voice-ai-clone-generation/id6450326506',
    app_name: 'Voice AI - Clone & Generator',
    title: 'Voice AI',
  },
  {
    app_url:
      'https://apps.apple.com/us/app/ai-video-generator-video-ai/id1672524118',
    app_name: 'Video AI - AI Video Generator',
    title: 'Video AI',
  },
  {
    app_url:
      'https://apps.apple.com/us/app/ai-foreign-language-tutor/id6450801007',
    app_name: 'Tutor AI - Foreign Language Tutor',
    title: 'Tutor AI',
  },
];

export { writingToolsHeaderData, aiAppsData };
