import { useCodeGridMarkdown } from './packages/use-codegrid-markdown/src';
import { useCodeGridPreview } from './packages/use-codegrid-preview/src';

const cgMdCtx = useCodeGridMarkdown();
const cgPreviewCtx = useCodeGridPreview();

const articleHtml = cgMdCtx.toArticleHtml(getSampleMd());

const html = cgPreviewCtx.toPreviewHtml(articleHtml);

console.log(html);

function getSampleMd() {
  return `## はじめに

  近年のフロントエンドの開発の現場は、一昔前と比べると開発ツールやWebサービスの発展により、開発環境の質の向上が著しいものとなっています。例えば、VS CodeのようなIDEとしてのコード補完機能や、GitやGitHubによるソースコードの管理機能は、必要不可欠なものとなっています。これらが当たり前でない時代を経験している人であれば、その恩恵は実感できるでしょう。
  
  対して、これからフロントエンドエンジニアになろうとする初学者にとって、このような状況はどう映るのでしょう？これらのツールやサービスの中には、すぐにその恩恵を得れるものがある一方で、学習コストが高いものもあります。得にGitは、その有用性や使い方の理解のみならず、ターミナルでのコマンド操作が基本となるため、より敷居が高く感じるのではないでしょうか。
  
  本来、フロントエンドの初学者が優先して学ぶべきは、HTML / CSS / JavaScriptの基礎であり、それらをWebサイトとして公開するための手段です。しかしながら、GitはこのWebページの作成から公開までの過程と密接な関係にあり、それによる恩恵を理解するには、実際にGitを用いたWebサイトの制作・運用フローを体験することが重要になります。
  
  そこで本シリーズではフロントエンドの初学者に向け、GitHub PagesのWebページの制作・運用フローを題材に、ターミナルを要さずともGUIベースでGitの操作ができる**VS Code付属のGit機能**によるGitの活用方法を解説していきます。
  
[note]
本シリーズでは、Webサイトの制作・運用を軸にした、VS CodeのGit機能の活用方法を解説します。Git自体の詳細な解説については、次の記事を参考にしてください。

- [Web制作者のためのGit入門](https://www.codegrid.net/series/git/)
- [Web制作者のための実践Git](https://www.codegrid.net/series/git-tech/)
- [GitHub Desktop入門](https://www.codegrid.net/series/2022-github-desktop/)
[/note]

[imgbox]
### GitHub Pagesの設定
![GitHub Pagesの設定](./assets/img/github-pages-settings.png)
[/imgbox]`;
}
