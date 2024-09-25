type GPTToolItems = {
  tool_type_label: string;
  tool_list: GPTToolItem[];
};
type GPTToolItem = {
  id: number;
  tool_type: string;
  desc: string;
  tool_name: string;
  tool_url: string;
  enable: boolean;
  tool_type_icon: string;
  tool_sort: number;
};

const getGPTsToolsData = (
  gptToolsData: GPTToolItem[],
  toolType: string,
  searchValue: string
): GPTToolItems[] => {
  const filteredTools =
    toolType === 'All'
      ? gptToolsData
      : gptToolsData.filter((item) => item.tool_type === toolType);

  const groupedTools = filteredTools.reduce((list, item) => {
    const type = item.tool_type;
    if (!list[type]) {
      list[type] = [];
    }
    list[type].push(item);
    return list;
  }, {} as Record<string, GPTToolItem[]>);

  return Object.entries(groupedTools).reduce((list, [key, tools]) => {
    const filteredToolList = tools.filter((item) =>
      item.tool_name.toLowerCase().includes(searchValue.toLowerCase())
    );

    if (filteredToolList.length > 0) {
      list.push({
        tool_type_label: key,
        tool_list: filteredToolList,
      });
    }

    return list;
  }, [] as GPTToolItems[]);
};

export { getGPTsToolsData };
