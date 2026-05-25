export default function Page() {
    return (
        <>
            <h1>React</h1>
            <p>
                <strong>React</strong>はUIを構築するためのJavaScriptライブラリである。
            </p>
            <h2>目次</h2>
            <ul>
                <li><a href="#components">コンポーネント</a></li>
                <li><a href="#events">イベントハンドリング</a></li>
            </ul>

            <h2 id="components">コンポーネント</h2>
            <p>Reactコンポーネントはマークアップを返すJavaScript関数である。</p>
            <h3>つくりかた</h3>
            <ol>
                <li>コンポーネントをエクスポートする：<code>export default</code>は標準的なJavaScript構文であり，ファイル内のメイン関数を他のファイルからインポートできるようにする。</li>
                <li>関数を定義する：<code>function MyComponent() &#x7B;&#x7D;</code>は<code>MyComponent</code>という名前の関数を定義する。Reactコンポーネントは大文字から始まるキャメルケースで命名する。</li>
                <li>マークアップを返す：<code>return</code>文を使ってマークアップを返す。裏側ではJavaScriptがHTMLを生成する。この構文をJSXという。</li>
            </ol>
            <p>したがってJavaScriptの制御フローと組み合わせることで，より柔軟にUIを構築することができる。</p>
            <h3>エクスポートとインポート</h3>
            <ul>
                <li>Default構文：<code>export default MyComponent() &#x7B;&#x7D;</code>でエクスポートし，<code>import MyComponent from &apos;./MyComponent&apos;</code>でインポートする。</li>
                <li>Named構文：<code>export function MyComponent() &#x7B;&#x7D;</code>でエクスポートし，<code>import &#x7B; MyComponent &#x7D; from &apos;./MyComponent&apos;</code>でインポートする。</li>
            </ul>
            <h3>JSXのルール</h3>
            <ul>
                <li>単一のルート要素を返す</li>
                <li>すべてのタグを閉じる</li>
                <li>（ほぼ）すべてキャメルケースで命名する</li>
            </ul>
            <p>JavaScriptの仕様上，予約語を避ける必要がある。たとえば<code>class</code>ではなく<code>className</code>を使用しなければならない。</p>
            <p><a href="https://transform.tools/html-to-jsx" target="_blank" rel="noopener noreferrer">HTML to JSX</a>はHTMLコードとJSXコードの間の変換に便利である。</p>
            <h3>JS in JSX</h3>
            <p>JSX内ではJavaScriptの式を波括弧で囲むことで使用できる。</p>
            <pre><code>
            {`
const person = {
    name: 'Gregorio Y. Zara',
    theme: {
      backgroundColor: 'black',
      color: 'pink'
    }
};
  
  export default function TodoList() {
    return (
      <div style={person.theme}>
        <h1>{person.name}'s Todos</h1>
      </div>
    );
};
            `}
            </code></pre>
            <h3>props</h3>
            <p>propsとはJSXタグに渡すデータである。</p>
            <ol>
                <li>子コンポーネントにpropsを渡す</li>
                <li>子コンポーネントからpropsを読み取る</li>
            </ol>
            <p>そうすると親コンポーネントと子コンポーネントを独立させることができる。</p>
            <pre><code>
            {`
function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
}

export default function App() {
    return (
        <Welcome name="Sara" />
    );
};
            `}
            </code></pre>
            <p>propsのデフォルト値を設定することもできる。</p>
            <p>JSXスプレッド構文でまとめてpropsを渡すことができる。</p>
            <pre><code>
            {`
function Profile(props) {
    return (
        <div className="card">
            <Avatar {...props} />
        </div>
    );
};
            `}
            </code></pre>
            <p>JSXタグでネストする場合，親コンポーネントはその中身を<code>children</code>というpropsとして受け取ることができる。</p>
            <pre><code>
            {`
function Card({ children }) {
    return (
        <div className="card">
            {children}
        </div>
    );
}

export default function Profile() {
    return (
        <Card>
            <Avatar />
        </Card>
    );
};
            `}
            </code></pre>

            <h2 id="events">イベントハンドリング</h2>

            <h2>参考文献</h2>
            <ul>
                <li><a href="https://ja.react.dev/learn" target="_blank" rel="noopener noreferrer">クイックスタート - React</a></li>
            </ul>
        </>
    )
}