import axiosInstance from './axios';

interface essayWriterData {
  content1: string;
  essayType: string;
  words: string;
  language: string;
}
const essayWriter = async (data: essayWriterData) => {
  try {
    const response = await axiosInstance.post(
      '/api/generate/essay-writer',
      data
    );
    console.log('Response:', response.data);

    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

interface essayCheckerData {
  content1: string;
}
const essayChecker = async (data: essayCheckerData) => {
  try {
    const response = await axiosInstance.post(
      '/api/generate/essay-checker',
      data
    );
    console.log('Response:', response.data);

    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

interface essayRewriterData {
  content1: string;
  language: string;
  outLanguage: string;
  domain: string;
}
const essayRewriter = async (data: essayRewriterData) => {
  try {
    const response = await axiosInstance.post(
      '/api/generate/essay-rewriter',
      data
    );
    console.log('Response:', response.data);

    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

interface essayHookGeneratorData {
  content1: string;
  language: string;
  targetAudience: string;
  toneOfVoice: string;
}
const essayHookGenerator = async (data: essayHookGeneratorData) => {
  try {
    const response = await axiosInstance.post(
      '/api/generate/essay-hook-generator',
      data
    );
    console.log('Response:', response.data);

    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

interface essayExpanderData {
  content1: string;
  language: string;
  targetAudience: string;
  toneOfVoice: string;
  number: string;
}
const essayExpander = async (data: essayExpanderData) => {
  try {
    const response = await axiosInstance.post(
      '/api/generate/essay-expander',
      data
    );
    console.log('Response:', response.data);

    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

const essayIntroductionGenerator = async (data: object) => {
  try {
    const response = await axiosInstance.post(
      '/api/generate/essay-introduction-generator',
      data
    );
    console.log('Response:', response.data);

    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

const essayOutlineGenerator = async (data: object) => {
  try {
    const response = await axiosInstance.post(
      '/api/generate/essay-outline-generator',
      data
    );
    console.log('Response:', response.data);

    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

const caseStudySummarizer = async (data: object) => {
  try {
    const response = await axiosInstance.post(
      '/api/generate/case-study-summarizer',
      data
    );
    console.log('Response:', response.data);

    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};
const essayConclusionGenerator = async (data: object) => {
  try {
    const response = await axiosInstance.post(
      '/api/generate/essay-conclusion-generator',
      data
    );
    console.log('Response:', response.data);

    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};
const thesisStatementGenerator = async (data: object) => {
  try {
    const response = await axiosInstance.post(
      '/api/generate/thesis-statement-generator',
      data
    );
    console.log('Response:', response.data);

    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};
const researchTitleGenerator = async (data: object) => {
  try {
    const response = await axiosInstance.post(
      '/api/generate/research-title-generator',
      data
    );
    console.log('Response:', response.data);

    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};
const essayShortener = async (data: object) => {
  try {
    const response = await axiosInstance.post(
      '/api/generate/essay-shortener',
      data
    );
    console.log('Response:', response.data);

    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};
const chatgptEssayWriter = async (data: object) => {
  try {
    const response = await axiosInstance.post(
      '/api/generate/chatgpt-essay-writer',
      data
    );
    console.log('Response:', response.data);

    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};
const informativeThesisStatementGenerator = async (data: object) => {
  try {
    const response = await axiosInstance.post(
      '/api/generate/informative-thesis-statement-generator',
      data
    );
    console.log('Response:', response.data);

    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};
const essayParaphraser = async (data: object) => {
  try {
    const response = await axiosInstance.post(
      '/api/generate/essay-paraphraser',
      data
    );
    console.log('Response:', response.data);

    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};
const researchPaperSummarizer = async (data: object) => {
  try {
    const response = await axiosInstance.post(
      '/api/generate/research-paper-summarizer',
      data
    );
    console.log('Response:', response.data);

    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};
const hypothesisGenerator = async (data: object) => {
  try {
    const response = await axiosInstance.post(
      '/api/generate/hypothesis-generator',
      data
    );
    console.log('Response:', response.data);

    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};
const attentionGrabberGenerator = async (data: object) => {
  try {
    const response = await axiosInstance.post(
      '/api/generate/attention-grabber-generator',
      data
    );
    console.log('Response:', response.data);

    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};
const essayTopicGenerator = async (data: object) => {
  try {
    const response = await axiosInstance.post(
      '/api/generate/essay-topic-generator',
      data
    );
    console.log('Response:', response.data);

    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};
const problemStatementGenerator = async (data: object) => {
  try {
    const response = await axiosInstance.post(
      '/api/generate/problem-statement-generator',
      data
    );
    console.log('Response:', response.data);

    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

const abstractGenerator = async (data: object) => {
  try {
    const response = await axiosInstance.post(
      '/api/generate/abstract-generator',
      data
    );
    console.log('Response:', response.data);

    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

const rhetoricalAnalysisGenerator = async (data: object) => {
  try {
    const response = await axiosInstance.post(
      '/api/generate/rhetorical-analysis-generator',
      data
    );
    console.log('Response:', response.data);

    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};
const aiResearchPaperGenerator = async (data: object) => {
  try {
    const response = await axiosInstance.post(
      '/api/generate/ai-research-paper-generator',
      data
    );
    console.log('Response:', response.data);

    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};
const essayScrambler = async (data: object) => {
  try {
    const response = await axiosInstance.post(
      '/api/generate/essay-scrambler',
      data
    );
    console.log('Response:', response.data);

    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};
const humanizeAiEssay = async (data: object) => {
  try {
    const response = await axiosInstance.post(
      '/api/generate/humanize-ai-essay',
      data
    );
    console.log('Response:', response.data);

    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

const paraphrasingTool = async (data: object) => {
  try {
    const response = await axiosInstance.post(
      '/api/generate/paraphrasing-tool',
      data
    );
    console.log('Response:', response.data);

    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};
const articleRewriter = async (data: object) => {
  try {
    const response = await axiosInstance.post(
      '/api/generate/article-rewriter',
      data
    );
    console.log('Response:', response.data);

    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};
const summarizer = async (data: object) => {
  try {
    const response = await axiosInstance.post('/api/generate/summarizer', data);
    console.log('Response:', response.data);

    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};
const sentenceExpander = async (data: object) => {
  try {
    const response = await axiosInstance.post(
      '/api/generate/sentence-expander',
      data
    );
    console.log('Response:', response.data);

    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};
const grammarChecker = async (data: object) => {
  try {
    const response = await axiosInstance.post(
      '/api/generate/grammar-checker',
      data
    );
    console.log('Response:', response.data);

    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};
const paragraphRewriter = async (data: object) => {
  try {
    const response = await axiosInstance.post(
      '/api/generate/paragraph-rewriter',
      data
    );
    console.log('Response:', response.data);

    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

const proofreader = async (data: object) => {
  try {
    const response = await axiosInstance.post(
      '/api/generate/proofreader',
      data
    );
    console.log('Response:', response.data);

    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};
const paragraphGenerator = async (data: object) => {
  try {
    const response = await axiosInstance.post(
      '/api/generate/paragraph-generator',
      data
    );
    console.log('Response:', response.data);

    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};
const bioGenerator = async (data: object) => {
  try {
    const response = await axiosInstance.post(
      '/api/generate/bio-generator',
      data
    );
    console.log('Response:', response.data);

    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};
const blogIdeasGenerator = async (data: object) => {
  try {
    const response = await axiosInstance.post(
      '/api/generate/blog-ideas-generatorblog-ideas-generator',
      data
    );
    console.log('Response:', response.data);

    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};
const blogIntroductionGenerator = async (data: object) => {
  try {
    const response = await axiosInstance.post(
      '/api/generate/blog-introduction-generator',
      data
    );
    console.log('Response:', response.data);

    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};
const blogOutlineGenerator = async (data: object) => {
  try {
    const response = await axiosInstance.post(
      '/api/generate/blog-outline-generator',
      data
    );
    console.log('Response:', response.data);

    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};
// ----

const blogConclusionGenerator = async (data: object) => {
  try {
    const response = await axiosInstance.post(
      '/api/generate/blog-conclusion-generator',
      data
    );
    console.log('Response:', response.data);

    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};
const blogMetaDescriptionGenerator = async (data: object) => {
  try {
    const response = await axiosInstance.post(
      '/api/generate/blog-meta-description-generator',
      data
    );
    console.log('Response:', response.data);

    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};
const blogMetaTitleGenerator = async (data: object) => {
  try {
    const response = await axiosInstance.post(
      '/api/generate/blog-meta-title-generator',
      data
    );
    console.log('Response:', response.data);

    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};
const sentenceRewriter = async (data: object) => {
  try {
    const response = await axiosInstance.post(
      '/api/generate/sentence-rewriter',
      data
    );
    console.log('Response:', response.data);

    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};
const reworder = async (data: object) => {
  try {
    const response = await axiosInstance.post('/api/generate/reworder', data);
    console.log('Response:', response.data);

    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};
const headlineGenerator = async (data: object) => {
  try {
    const response = await axiosInstance.post(
      '/api/generate/headline-generator',
      data
    );
    console.log('Response:', response.data);

    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};
// ------

const poemGenerator = async (data: object) => {
  try {
    const response = await axiosInstance.post(
      '/api/generate/poem-generator',
      data
    );
    console.log('Response:', response.data);

    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};
const bookWriter = async (data: object) => {
  try {
    const response = await axiosInstance.post(
      '/api/generate/book-writer',
      data
    );
    console.log('Response:', response.data);

    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};
const storyGenerator = async (data: object) => {
  try {
    const response = await axiosInstance.post(
      '/api/generate/story-generator',
      data
    );
    console.log('Response:', response.data);

    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};
const plot = async (data: object) => {
  try {
    const response = await axiosInstance.post('/api/generate/plot', data);
    console.log('Response:', response.data);

    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};
const pressReleaseGenerator = async (data: object) => {
  try {
    const response = await axiosInstance.post(
      '/api/generate/press-release-generator',
      data
    );
    console.log('Response:', response.data);

    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};
const answerGenerator = async (data: object) => {
  try {
    const response = await axiosInstance.post(
      '/api/generate/answer-generator',
      data
    );
    console.log('Response:', response.data);

    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};
// ------
const peopleAlsoAsk = async (data: object) => {
  try {
    const response = await axiosInstance.post(
      '/api/generate/people-also-ask',
      data
    );
    console.log('Response:', response.data);

    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};
const randomQuestionGenerator = async (data: object) => {
  try {
    const response = await axiosInstance.post(
      '/api/generate/random-question-generator',
      data
    );
    console.log('Response:', response.data);

    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};
const callToActionGenerator = async (data: object) => {
  try {
    const response = await axiosInstance.post(
      '/api/generate/call-to-action-generator',
      data
    );
    console.log('Response:', response.data);

    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};
const titleGenerator = async (data: object) => {
  try {
    const response = await axiosInstance.post(
      '/api/generate/title-generator',
      data
    );
    console.log('Response:', response.data);

    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};
const poemSummary = async (data: object) => {
  try {
    const response = await axiosInstance.post(
      '/api/generate/poem-summary',
      data
    );
    console.log('Response:', response.data);

    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};
const story = async (data: object) => {
  try {
    const response = await axiosInstance.post('/api/generate/story', data);
    console.log('Response:', response.data);

    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};
//--------
const passage = async (data: object) => {
  try {
    const response = await axiosInstance.post('/api/generate/passage', data);
    console.log('Response:', response.data);

    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};
const article = async (data: object) => {
  try {
    const response = await axiosInstance.post('/api/generate/article', data);
    console.log('Response:', response.data);

    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};
const bulletPointsGenerator = async (data: object) => {
  try {
    const response = await axiosInstance.post(
      '/api/generate/bullet-points-generator',
      data
    );
    console.log('Response:', response.data);

    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};
const aboutUsGenerator = async (data: object) => {
  try {
    const response = await axiosInstance.post(
      '/api/generate/about-us-generator',
      data
    );
    console.log('Response:', response.data);

    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};
const termsAndConditionsGenerator = async (data: object) => {
  try {
    const response = await axiosInstance.post(
      '/api/generate/terms-and-conditions-generator',
      data
    );
    console.log('Response:', response.data);

    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};
const refundPolicyGenerator = async (data: object) => {
  try {
    const response = await axiosInstance.post(
      '/api/generate/refund-policy-generator',
      data
    );
    console.log('Response:', response.data);

    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};
// -------

const privacyPolicyGenerator = async (data: object) => {
  try {
    const response = await axiosInstance.post(
      '/api/generate/privacy-policy-generator',
      data
    );
    console.log('Response:', response.data);

    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};
const character = async (data: object) => {
  try {
    const response = await axiosInstance.post('/api/generate/character', data);
    console.log('Response:', response.data);

    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};
const caseConverter = async (data: object) => {
  try {
    const response = await axiosInstance.post(
      '/api/generate/case-converter',
      data
    );
    console.log('Response:', response.data);

    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};
const author = async (data: object) => {
  try {
    const response = await axiosInstance.post('/api/generate/author', data);
    console.log('Response:', response.data);

    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};
const professional = async (data: object) => {
  try {
    const response = await axiosInstance.post(
      '/api/generate/professional',
      data
    );
    console.log('Response:', response.data);

    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};
const realEstate = async (data: object) => {
  try {
    const response = await axiosInstance.post(
      '/api/generate/real-estate',
      data
    );
    console.log('Response:', response.data);

    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};
// --------

const intro = async (data: object) => {
  try {
    const response = await axiosInstance.post('/api/generate/intro', data);
    console.log('Response:', response.data);

    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};
const synonymsGenerator = async (data: object) => {
  try {
    const response = await axiosInstance.post(
      '/api/generate/synonyms-generator',
      data
    );
    console.log('Response:', response.data);

    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};
const activeToPassiveVoiceConverter = async (data: object) => {
  try {
    const response = await axiosInstance.post(
      '/api/generate/active-to-passive-voice-converter',
      data
    );
    console.log('Response:', response.data);

    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};
const spellChecker = async (data: object) => {
  try {
    const response = await axiosInstance.post(
      '/api/generate/spell-checker',
      data
    );
    console.log('Response:', response.data);

    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};
const punctuationChecker = async (data: object) => {
  try {
    const response = await axiosInstance.post(
      '/api/generate/punctuation-checker',
      data
    );
    console.log('Response:', response.data);

    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};
const wordCounter = async (data: object) => {
  try {
    const response = await axiosInstance.post(
      '/api/generate/word-counter',
      data
    );
    console.log('Response:', response.data);

    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};
// --------

const explainItToA5thGrader = async (data: object) => {
  try {
    const response = await axiosInstance.post(
      '/api/generate/explain-it-to-a-5th-grader',
      data
    );
    console.log('Response:', response.data);

    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};
const continueWriting = async (data: object) => {
  try {
    const response = await axiosInstance.post(
      '/api/generate/continue-writing',
      data
    );
    console.log('Response:', response.data);

    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};
const video = async (data: object) => {
  try {
    const response = await axiosInstance.post('/api/generate/video', data);
    console.log('Response:', response.data);

    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};
const hookGenerator = async (data: object) => {
  try {
    const response = await axiosInstance.post(
      '/api/generate/hook-generator',
      data
    );
    console.log('Response:', response.data);

    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};
const sentenceShortener = async (data: object) => {
  try {
    const response = await axiosInstance.post(
      '/api/generate/sentence-shortener',
      data
    );
    console.log('Response:', response.data);

    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};
const plagiarismChecker = async (data: object) => {
  try {
    const response = await axiosInstance.post(
      '/api/generate/plagiarism-checker',
      data
    );
    console.log('Response:', response.data);

    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};
// --------

const talkingPointsToParagraph = async (data: object) => {
  try {
    const response = await axiosInstance.post(
      '/api/generate/talking-points-to-paragraph',
      data
    );
    console.log('Response:', response.data);

    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};
const problemAgitateSolutionPas = async (data: object) => {
  try {
    const response = await axiosInstance.post(
      '/api/generate/problem-agitate-solution-pas',
      data
    );
    console.log('Response:', response.data);

    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};
const attentionInterestDesireActionAida = async (data: object) => {
  try {
    const response = await axiosInstance.post(
      '/api/generate/attention-interest-desire-action-aida',
      data
    );
    console.log('Response:', response.data);

    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};
const beforeAfterBridgeBab = async (data: object) => {
  try {
    const response = await axiosInstance.post(
      '/api/generate/before-after-bridge-bab',
      data
    );
    console.log('Response:', response.data);

    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};
const questFormulaGenerator = async (data: object) => {
  try {
    const response = await axiosInstance.post(
      '/api/generate/quest-formula-generator',
      data
    );
    console.log('Response:', response.data);

    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};
const passiveToActiveVoiceConverter = async (data: object) => {
  try {
    const response = await axiosInstance.post(
      '/api/generate/passive-to-active-voice-converter',
      data
    );
    console.log('Response:', response.data);

    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};
//--------
const sentenceGenerator = async (data: object) => {
  try {
    const response = await axiosInstance.post(
      '/api/generate/sentence-generator',
      data
    );
    console.log('Response:', response.data);

    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};
const bookTitleGenerator = async (data: object) => {
  try {
    const response = await axiosInstance.post(
      '/api/generate/book-title-generator',
      data
    );
    console.log('Response:', response.data);

    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};
const faqGenerator = async (data: object) => {
  try {
    const response = await axiosInstance.post(
      '/api/generate/faq-generator',
      data
    );
    console.log('Response:', response.data);

    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};
const contentImprover = async (data: object) => {
  try {
    const response = await axiosInstance.post(
      '/api/generate/content-improver',
      data
    );
    console.log('Response:', response.data);

    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};
const prosAndConsGenerator = async (data: object) => {
  try {
    const response = await axiosInstance.post(
      '/api/generate/pros-and-cons-generator',
      data
    );
    console.log('Response:', response.data);

    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};
const sentenceSimplifier = async (data: object) => {
  try {
    const response = await axiosInstance.post(
      '/api/generate/sentence-simplifier',
      data
    );
    console.log('Response:', response.data);

    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};
// ------
const firstPersonToThirdPersonConverter = async (data: object) => {
  try {
    const response = await axiosInstance.post(
      '/api/generate/first-person-to-third-person-converter',
      data
    );
    console.log('Response:', response.data);

    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};
const subheadingGenerator = async (data: object) => {
  try {
    const response = await axiosInstance.post(
      '/api/generate/subheading-generator',
      data
    );
    console.log('Response:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};
const onlineArticleSpinner = async (data: object) => {
  try {
    const response = await axiosInstance.post(
      '/api/generate/online-article-spinner',
      data
    );
    console.log('Response:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};
const sentenceRephraser = async (data: object) => {
  try {
    const response = await axiosInstance.post(
      '/api/generate/sentence-rephraser',
      data
    );
    console.log('Response:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};
const bypassAI = async (data: object) => {
  try {
    const response = await axiosInstance.post('/api/generate/bypass-ai', data);
    console.log('Response:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};
const humanizeAI = async (data: object) => {
  try {
    const response = await axiosInstance.post(
      '/api/generate/humanize-ai',
      data
    );
    console.log('Response:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};
//------
const undetectableAI = async (data: object) => {
  try {
    const response = await axiosInstance.post(
      '/api/generate/undetectable-ai',
      data
    );
    console.log('Response:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

const quillBot = async (data: object) => {
  try {
    const response = await axiosInstance.post('/api/generate/quillbot', data);
    console.log('Response:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

const paragraphScrambler = async (data: object) => {
  try {
    const response = await axiosInstance.post(
      '/api/generate/paragraph-scrambler',
      data
    );
    console.log('Response:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

const haikuGenerator = async (data: object) => {
  try {
    const response = await axiosInstance.post(
      '/api/generate/haiku-generator',
      data
    );
    console.log('Response:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

const topicSentenceGenerator = async (data: object) => {
  try {
    const response = await axiosInstance.post(
      '/api/generate/topic-sentence-generator',
      data
    );
    console.log('Response:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

const plagiarismRemover = async (data: object) => {
  try {
    const response = await axiosInstance.post(
      '/api/generate/plagiarism-remover',
      data
    );
    console.log('Response:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};
const aiTextGenerator = async (data: object) => {
  try {
    const response = await axiosInstance.post(
      '/api/generate/ai-text-generator',
      data
    );
    console.log('Response:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};
const api = {
  essayWriter,
  essayChecker,
  essayRewriter,
  essayHookGenerator,
  essayExpander,
  essayIntroductionGenerator,
  essayOutlineGenerator,
  caseStudySummarizer,
  thesisStatementGenerator,
  researchTitleGenerator,
  essayShortener,
  chatgptEssayWriter,
  informativeThesisStatementGenerator,
  essayConclusionGenerator,
  essayParaphraser,
  researchPaperSummarizer,
  hypothesisGenerator,
  attentionGrabberGenerator,
  essayTopicGenerator,
  problemStatementGenerator,
  abstractGenerator,
  rhetoricalAnalysisGenerator,
  aiResearchPaperGenerator,
  essayScrambler,
  humanizeAiEssay,
  paraphrasingTool,
  articleRewriter,
  summarizer,
  sentenceExpander,
  grammarChecker,
  paragraphRewriter,
  proofreader,
  paragraphGenerator,
  bioGenerator,
  blogIdeasGenerator,
  blogIntroductionGenerator,
  blogOutlineGenerator,
  blogConclusionGenerator,
  blogMetaDescriptionGenerator,
  blogMetaTitleGenerator,
  sentenceRewriter,
  reworder,
  headlineGenerator,
  poemGenerator,
  bookWriter,
  storyGenerator,
  plot,
  pressReleaseGenerator,
  answerGenerator,
  peopleAlsoAsk,
  randomQuestionGenerator,
  callToActionGenerator,
  titleGenerator,
  poemSummary,
  story,
  passage,
  article,
  bulletPointsGenerator,
  aboutUsGenerator,
  termsAndConditionsGenerator,
  refundPolicyGenerator,
  privacyPolicyGenerator,
  caseConverter,
  author,
  professional,
  realEstate,
  character,
  intro,
  synonymsGenerator,
  activeToPassiveVoiceConverter,
  spellChecker,
  punctuationChecker,
  wordCounter,
  explainItToA5thGrader,
  continueWriting,
  video,
  hookGenerator,
  sentenceShortener,
  plagiarismChecker,
  talkingPointsToParagraph,
  problemAgitateSolutionPas,
  attentionInterestDesireActionAida,
  beforeAfterBridgeBab,
  questFormulaGenerator,
  passiveToActiveVoiceConverter,
  sentenceGenerator,
  bookTitleGenerator,
  faqGenerator,
  contentImprover,
  prosAndConsGenerator,
  sentenceSimplifier,
  bypassAI,
  humanizeAI,
  onlineArticleSpinner,
  subheadingGenerator,
  sentenceRephraser,
  firstPersonToThirdPersonConverter,
  undetectableAI,
  quillBot,
  paragraphScrambler,
  haikuGenerator,
  topicSentenceGenerator,
  plagiarismRemover,
  aiTextGenerator,
};

export default api;
