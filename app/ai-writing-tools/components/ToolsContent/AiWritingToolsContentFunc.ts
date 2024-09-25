type AiWritingToolItems = {
  id: number;
  icon_address: string;
  tool_type_label: string;
  tool_list: AiWritingToolItem[];
};
interface AiWritingToolItem {
  icon_address: string;
  is_popular: boolean;
  recommend_sort: number;
  toolType: {
    id: number;
    tool_type_label: string;
    tool_type: string;
  };
  tool_desc: string;
  tool_name_label: string;
  tool_url: string;
  tool_host: string | null; // 允许为 null
}

const getAiWritingToolsData = (
  aiWritingToolsData: AiWritingToolItems[],
  toolType: string,
  searchValue: string
): AiWritingToolItems[] => {
  const filteredTools = aiWritingToolsData.filter((item) =>
    toolType === 'All' ? true : item.tool_type_label === toolType
  );

  return filteredTools.reduce((list, toolItem) => {
    const filteredToolList = toolItem.tool_list.filter((item) =>
      item.tool_name_label.toLowerCase().includes(searchValue.toLowerCase())
    );

    if (filteredToolList.length > 0) {
      list.push({
        id: toolItem.id,
        icon_address: toolItem.icon_address,
        tool_type_label: toolItem.tool_type_label,
        tool_list: filteredToolList,
      });
    }

    return list;
  }, [] as AiWritingToolItems[]);
};

export { getAiWritingToolsData };
