import { NextResponse } from 'next/server';
import geminiApi from '@/app/utils/gemini';

export async function POST(
  req: Request,
  { params }: { params: { api: string } }
) {
  try {
    const body = await req.json();
    const { name, age } = body;

    console.log(body);
    console.log(params);
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

    // const apiName = convertToCamelCase(params.api);
    // console.log(apiName);
    // @ts-ignore
    // const res = await api[convertToCamelCase(api)]({
    //   name: 'thesisTopic',
    //   age: 'essayType',
    //   words: 'words',
    //   language: 'language',
    // });
    geminiApi
      .haikuGenerator({
        content1: 'swimming is fun',
        content2: 'I love swimming',
        language: 'English',
      })
      .then((res) => {
        return new Response(JSON.stringify({ ...res }), {
          status: 200,
          headers: { 'Content-Type': 'application/json' },
        });
      });
    return new Response(JSON.stringify({ s: 's' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    // console.error('Error in API:', error);
    return NextResponse.json(
      { error: 'Something went wrong.' },
      { status: 500 }
    );
  }
}
