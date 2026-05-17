export default function Page() {
    return (
        <>
            <h1>ページの作成</h1>
            <h2>ページの作成</h2>
            <p>ページとは特定のルートでレンダリングされるUIである。</p>
            <p>ページを作成するには，<code>app</code>ディレクトリ内に<code>page.tsx</code>ファイルを追加し，Reactコンポーネントをデフォルトエクスポートする。</p>
            <h3>レイアウトの作成</h3>
            <p>レイアウトとは複数のページ間で共有されるUIである。</p>
            <p>レイアウトを作成するには，<code>app</code>ディレクトリ内に<code>layout.tsx</code>ファイルを追加し，<code>children</code>プロップを持つReactコンポーネントをデフォルトエクスポートする。</p>
            <h3>ネストされたページの作成</h3>
            <p>ネストされたページを作成するには，<code>app</code>ディレクトリ内にフォルダを作成し，その中に<code>page.tsx</code>ファイルを追加する。</p>
            <p>同様に，ネストされたレイアウトを作成するには，<code>app</code>ディレクトリ内にフォルダを作成し，その中に<code>layout.tsx</code>ファイルを追加する。</p>
            <h3>ページ間のリンク</h3>
            <p>ページ間のリンクを作成するには，<code>&lt;Link&gt;</code>コンポーネントを使用する。これは<code>&lt;a&gt;</code>タグを拡張してプリフェッチとクライアントサイドのナビゲーションを提供する。</p>
            <pre><code>
{`
import Link from 'next/link';

export default function Page() {
    return (
        <Link href="/about">About</Link>
    );
};
`}
            </code></pre>
        </>
    )
}