import Link from 'next/link';

export default function Home() {
  return (
    <>
      <h1>Notes on Next.js</h1>
      <p>このウェブサイトはNext.jsとその周辺情報に関するノートをまとめたものである。</p>
      <h2>ノート</h2>
      <ul>
        <li><Link href="/rules">フォルダとファイルの規則</Link></li>
        <li>React</li>
      </ul>
      <h2>参考文献</h2>
      <ul>
        <li><a href="https://nextjsjp.org/docs" target="_blank" rel="noopener noreferrer">Next.js 日本語ドキュメント</a></li>
      </ul>
    </>
  );
}
