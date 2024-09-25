type TemplateItem = {
  id: number;
  name: string;
  description: string;
  icon: string;
  tags: string;
};

const getTemplatesByTag = (templatesData: TemplateItem[], tag: string) => {
  let list: TemplateItem[] = [];
  if (tag !== 'All') {
    list = templatesData.filter((item) => item.tags === tag);
  } else {
    list = templatesData;
  }
  list = list.length > 12 ? list.slice(0, 12) : list;
  return list;
};

export { getTemplatesByTag };
