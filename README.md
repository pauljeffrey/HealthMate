# MyHealthMate - A ChatGPT-powered Chatbot for Your Health related issues and insurance
MyHealthMate is a helpful assistant that provides basic information about health issues, medical conditions, and health insurance plans and packages. It provides responses from its own knowledge or by searching the internet using the tavilysearch tool.

The tech stack used is Next.js, TypeScript, Tailwind CSS, and OpenAI. 
## Development

1. Make sure you have installed node and yarn

[Node installation](https://nodejs.org/en/download)
[yarn installation](https://classic.yarnpkg.com/lang/en/docs/install/#mac-stable)

yarn installation in your terminal after installing node

`npm install -g yarn`

**If you run into permission errors run `sudo npm install -g yarn` instead, then enter your computer password.**

Check that both are installed.

```sh
node -v
yarn -v
```

Node must be at least version 18.x.x

2. Install packages

```sh
yarn install
```

or

```sh
npm install
```

You should see a `node_modules` folder afterwards.

3. Set up your `.env` file and insert credentials for your openai and tavily account. Tavily is a websearch tool used by AI agents to get information from the internet . Copy `.env.example` into `.env`. Your `.env` file should look like this:

```
OPENAI_API_KEY=
TAVILY_API_KEY=

```

4. Start app by running in command line:
```sh
yarn dev
```
or 

```sh
npm run dev
```

## Troubleshooting

**General errors**

- Make sure you're running the latest Node version. Run `node -v`
- Make sure you're using the same versions of LangChain and Pinecone as this repo.
- Check that you've created an `.env` file that contains your valid (and working) API keys.
- If you change `modelName` in `OpenAI` note that you need access to `gpt-4` for it to work.
- Make sure you have access to `gpt-4` if you decide to use it. Test your openAI keys outside the repo and make sure it works and that you have enough API credits.
- Your pdf file is corrupted and cannot be parsed.

## Deployment (going live)

**Please note that eslint and typescript errors are ignored in the `next.config.js` file by default. If you would like to throw errors during production build remove these configs**

There are a couple of high-level options for deploying your app:

a.
Deploying to a VM or container
Persistent filesystem means you can save and load files from disk
Always-running process means you can cache some things in memory
You can support long-running requests, such as WebSockets

b.
Deploying to a serverless environment
No persistent filesystem means you can load files from disk, but not save them for later
Cold start means you can't cache things in memory and expect them to be cached between requests
Function timeouts mean you can't support long-running requests, such as WebSockets
Some other considerations include:

Options:

- [Vercel](https://vercel.com/docs/concepts/deployments/overview)
- [Fly.io](https://fly.io/)
- [Render](https://render.com/docs/deploy-to-render)

