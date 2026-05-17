import Link from 'next/link';

export default function Home() {
  return (
    <>
      <h1>Notes on Next.js</h1>
      <p>このウェブサイトはNext.jsとその周辺情報に関するノートをまとめたものである。</p>
      <p>すべてのリソースは<a href="https://github.com/sone0123/nextjspractice" target="_blank" rel="noopener noreferrer">GitHub</a>にある。</p>
      <h2>ノート</h2>
      <ul>
        <li>React</li>
        <li><Link href="/rules">フォルダとファイルの規則</Link></li>
        <li><Link href="/pages">ページの作成</Link></li>
      </ul>
      <h2>参考文献</h2>
      <p>このウェブサイトの内容は主に次のウェブサイトの内容に基づいている。</p>
      <ul>
        <li><a href="https://nextjsjp.org/docs" target="_blank" rel="noopener noreferrer">Next.js 日本語ドキュメント</a></li>
      </ul>
    </>
  );
}
