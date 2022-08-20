# Next.js + Typescript + Mantine + TailwindCSSで0からTodoアプリ作成

## 流れ
1. 使用する技術の紹介
2. 環境構築
3. Todoアプリ作成

### 技術紹介

- [Next.js](https://nextjs.org/)
   - JavaScriptライブラリである[React](https://ja.reactjs.org/)のフレームワーク。
   - [Vercel](https://vercel.com/home?utm_source=next-site&utm_medium=banner&utm_campaign=next-website)が制作。
   - React単体で使うと辛いところをカバーしてくれている。現代のWebアプリ開発では必須と言ってもいい。
- [TypeScript](https://www.typescriptlang.org/)
   - 生きていく上で必須。
   - 型があることでドキュメント代わりになったり、細かいバグを防ぐことができます。
- [Mantine](https://mantine.dev/)
   - Reactのコンポーネントライブラリ
   - 似たようなもので、[MUI](https://mui.com/) / [chakraUI](https://chakra-ui.com/)などがあります。
   - Mantineを進めする理由
     - 実際に使えるコンポーネントの数が多い
     - カスマイズの柔軟性が高い
     - TypeScriptサポート
     - 便利なHooksがある
       - debounce機能とか
    よくある機能だけど、実装するのは面倒！！みたいなのをhooksとして用意してくれてる印象
      - 開発が活発
- [TailwindCSS](https://tailwindcss.com/)
  - ユーティリティファーストな CSS フレームワーク
  - 設定も簡単で、慣れると爆速でスタイリングできる
- [pnpm](https://pnpm.io/ja/)
  - 高速、かつディスク容量効率が良いパッケージマネージャー
  - node_modulesがめちゃいい感じになるので今回はこれで行います。

### 環境構築

1. pnpmのインストール

    ```
    brew install pnpm

    npm install -g pnpm
    ```

    ```
    pnpm -v
    ```

2. Next.js + TypeScript

    ```
    pnpm create next-app --typescript

    pnpm dev
    ```

3. Mantine

    ```
    pnpm add @mantine/core @mantine/hooks @mantine/next @emotion/server @emotion/react
    ```

    ```tsx
    import { Button } from '@mantine/core';

    const AppButton = () => {
      return <Button />;
    }
    ```

4. TailwindCSS

    ```
    pnpm add  -D tailwindcss postcss autoprefixer  npx tailwindcss init -p
    ```

    ```typescript
    // TailwindCSSの設定

    // tailwind.config.js
    /** @type {import('tailwindcss').Config} */ 
    module.exports = {
      content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",   ],
      theme: {
        extend: {},
      },   plugins: [], }

    // /styles/globals.css
    @tailwind base;
    @tailwind components;
    @tailwind utilities;

    // ローカルサーバー起動
    pnpm dev
    ```
    
### Todoアプリ作成

   - 作成アプリのデザイン
   https://www.figma.com/community/file/1142725149013667288
   
      <img width="886" alt="スクリーンショット 2022-08-20 16 43 45" src="https://user-images.githubusercontent.com/87469023/185734914-c6fc828b-7805-4e93-8083-489c2e808981.png">
      
      ⚠️ 作成者は初めてFigmaを使って作成したのと、デザインに疎いのでそこら辺はご了承ください🙇‍♂️


