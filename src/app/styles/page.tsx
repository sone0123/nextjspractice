export default function Page() {
    return (
        <>
            <h1>スタイルの設定：Tailwind CSS</h1>
            <p><a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer">Tailwind CSS</a>はユーティリティファーストなCSSフレームワークである。</p>
            <h2>インストール</h2>
            <pre><code>
            {`
npm install -D tailwindcss @tailwindcss/postcss
            `}
            </code></pre>
            <p>PostCSSプラグインを<code>postcss.config.js</code>ファイルに追加する。</p>
            <pre><code>
            {`
export default {
    plugins: {
        '@tailwindcss/postcss': {},
    },
}
            `}
            </code></pre>
            <p>グローバルCSSファイルにTailwindをインポートする。</p>
            <pre><code>
            {`
@import 'tailwindcss';
            `}
            </code></pre>
            <p>CSSファイルをルートレイアウトにインポートする。</p>
            <pre><code>
            {`
import './globals.css';
import './global.css';
            `}
            </code></pre>

            <h2>グローバルCSS</h2>
            <p><code>app/global.css</code>ファイルを作成し，ルートレイアウトにインポートして，すべてのルートにスタイルを適用する。</p>
            <p>本当にグローバルなCSSにはグローバルスタイルを使用し，コンポーネントのスタイリングにはTailwind CSSを使用する。</p>
        </>
    )
}