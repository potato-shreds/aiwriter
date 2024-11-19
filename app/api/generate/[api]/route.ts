// app/api/generate/[api]/route.ts
import { NextResponse } from 'next/server';
import geminiApi from '../../../utils/gemini';

// export async function GET(
//   req: Request,
//   { params }: { params: { api: string } }
// ) {
//   const { api } = params;
//   const convertToCamelCase = (str: string) => {
//     return str
//       .split('-')
//       .map((word, index) => {
//         return index === 0
//           ? word
//           : word.charAt(0).toUpperCase() + word.slice(1);
//       })
//       .join('');
//   };
//   const res = await geminiApi[convertToCamelCase(api)]({
//     content1: 'thesisTopic',
//     essayType: 'essayType',
//     words: '200',
//     language: 'language',
//   });

//   return NextResponse.json({ ...res });
// }

export async function POST(
  req: Request,
  { params }: { params: { api: string } }
) {
  const { api } = params;
  const body = await req.json();
  const convertToCamelCase = (str: string) => {
    return str
      .split('-')
      .map((word, index) => {
        return index === 0
          ? word
          : word.charAt(0).toUpperCase() + word.slice(1);
      })
      .join('');
  };
  // @ts-ignore
  const res = await geminiApi[convertToCamelCase(api)]({
    ...body,
  });
  return NextResponse.json({
    res: res,
  });
}
