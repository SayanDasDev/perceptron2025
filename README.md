# PERCEPTRON 2025

## Installing NodeJs for linux

Check if node.js is installed using command `node -v` if not install/update using following commands

```bash
# installs nvm (Node Version Manager)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.0/install.sh | bash
# download and install Node.js (you may need to restart the terminal)
nvm install 22
# verifies the right Node.js version is in the environment
node -v # should print `v22.11.0`
# verifies the right npm version is in the environment
npm -v # should print `10.9.0`
```

you can refer this [official link](https://nodejs.org/en/download/package-manager)

## Installing a package manager - pnpm

Now that NodeJS is installed clone this repo. Then **go inside the cloned directory** and try using `npm i`. Chances are it will give an error. In that case we need to install another package manager called **pnpm**.

npm (Node Package Manager) comes pre-installed with NodeJS. Use it to install pnpm globally

```bash
npm i -g pnpm
```

Then, **while inside that cloned directory** install the required packages with

```bash
pnpm install
```

Build the application

```bash
pnpm run build
```

Run the production server

```bash
pnpm start
```
