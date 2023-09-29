import CodeGridMarkdown from 'codegrid-markdown';
import matter from 'gray-matter';
import { JSDOM } from 'jsdom';
import { replaceCgmd } from './replace-cgmd';

const renderer = new CodeGridMarkdown();

export const useCodeGridMarkdown = () => {
  return {
    toArticleHtml(md: string) {
      const { data: _, content } = matter(md);
      const html = renderer.render(content);
      const doc = new JSDOM(html).window.document;
      const codeGridDoc = replaceCgmd(doc);
      return codeGridDoc.body.innerHTML;
    },
  };
};
