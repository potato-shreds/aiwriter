const calculateColumns = (width: number) => {
  if (width >= 1200) return 3;
  else if (width >= 800) return 2;
  else return 1;
};

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

const splitArrayEvenly = (
  columns: number,
  array: ReviewItem[]
): ReviewItem[][] => {
  const result: ReviewItem[][] = [];
  const size = Math.ceil(array.length / columns); // 使用 Math.ceil 确保能包含所有元素

  for (let i = 0; i < columns; i++) {
    const start = i * size;
    const chunk = array.slice(start, start + size);
    if (chunk.length > 0) {
      result.push(chunk);
    }
  }

  return result;
};

export { calculateColumns, splitArrayEvenly };
