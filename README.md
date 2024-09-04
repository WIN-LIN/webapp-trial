## Project Tech Stack

- npm
- Next.js
- Tailwind CSS
- TypeScript
- imAccount SDK
- ethers.js and viem

## Getting Started

### Install imaccount-sdk

1. You should have the access to the [imaccount-sdk](https://github.com/consenlabs/imaccount-sdk) repo.
2. Generate `PAT` Personal Access Token. (choose classic tokens)
3. Create a `.npmrc` file in the root directory and set `PAT` to the file.

   ```bash
   //npm.pkg.github.com/:_authToken=${PAT}
   ```

4. Run `npm install` to install the imaccount-sdk.

### Set up Testnet environment

TODO

### Run the app

```bash
npm dev
```

Open [http://localhost:8787](http://localhost:8787) with your browser to see the result.
