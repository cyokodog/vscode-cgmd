import { JSDOM } from 'jsdom';
import {
  detectImgboxAttributes,
  ImgboxAttribute,
} from './detect-imgbox-attributes';

const makeImgBox = (
  (document: Document) =>
  (html: string): NodeList => {
    const fragment = document.createDocumentFragment();
    const imgbox = document.createElement('div');

    imgbox.classList.add('Imgbox');
    imgbox.innerHTML = html;
    fragment.appendChild(imgbox);

    return fragment.querySelectorAll('.Imgbox');
  }
)(new JSDOM().window.document);

describe('detectImgboxAttributes()', () => {
  const parameterized = (
    name: string,
    html: string,
    expected: ImgboxAttribute,
  ) => {
    test(name, () => {
      const [_, actual] = detectImgboxAttributes(makeImgBox(html))[0];
      expect(JSON.stringify(actual)).toBe(JSON.stringify(expected));
    });
  };

  const parameterizedError = (name: string, html: string) => {
    test(name, () => {
      expect(() => detectImgboxAttributes(makeImgBox(html))).toThrow();
    });
  };

  parameterized(
    '正しく変換すること',
    `
    <h1>見出し</h1>
    <p><img src="dummy.png" alt="素晴らしい画像"></p>
    <p>補足テキスト</p>
  `,
    {
      src: 'dummy.png',
      caption: '見出し',
      alt: '素晴らしい画像',
      aside: '<p>補足テキスト</p>',
    },
  );

  parameterized(
    '見出しがjade仕様でも変換できること',
    `
    <div class="ImgBox-title">見出し</div>
    <p><img src="dummy.png" alt="素晴らしい画像"></p>
    <p>補足テキスト</p>
  `,
    {
      src: 'dummy.png',
      caption: '見出し',
      alt: '素晴らしい画像',
      aside: '<p>補足テキスト</p>',
    },
  );

  parameterized(
    '画像と補足テキストが1つの<p>に内包されていても変換できること',
    `
    <h1>見出し</h1>
    <p><img src="dummy.png" alt="素晴らしい画像">補足テキスト</p>
    `,
    {
      src: 'dummy.png',
      caption: '見出し',
      alt: '素晴らしい画像',
      aside: '<p>補足テキスト</p>',
    },
  );

  parameterized(
    'imgにaltが無くても変換できること',
    `
    <h1>見出し</h1>
    <p><img src="dummy.png"></p>
    <p>補足テキスト</p>
    `,
    {
      src: 'dummy.png',
      caption: '見出し',
      alt: '',
      aside: '<p>補足テキスト</p>',
    },
  );

  parameterizedError(
    'img要素がなかったらエラーになること',
    `
    <h1>見出し</h1>
    <p>補足テキスト</p>
    `,
  );

  parameterizedError(
    'img要素にsrcがなかったらエラーになること',
    `
    <h1>見出し</h1>
    <p><img alt="無のようす"></p>
    <p>補足テキスト</p>
    `,
  );
});
