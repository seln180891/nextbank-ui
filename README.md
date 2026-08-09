# NextBank UI

NextBank UI is the frontend application for the **NextBank** platform, built with **Angular 18**.

The application consumes the REST APIs exposed by the **nextbank-api** backend.

---

# Workspace Structure

The frontend and backend are independent repositories, but they should be cloned into the **same workspace**.

Expected directory structure:

```text
workspace/
├── local-dev-infra/
├── nextbank-api/
└── nextbank-ui/
```

If you already cloned **nextbank-api**, clone **nextbank-ui** into the same parent directory.

---

# Prerequisites

Before running the project, install the following tools:

* Git
* NVM (Node Version Manager)
* Node.js 22 LTS
* Angular CLI 18.2.21

---

<details>
<summary><strong>MacOS Setup</strong></summary>

## 1. Verify Git

```bash
git --version
```

If Git is not installed:

```bash
brew install git
```

---

## 2. Verify NVM

```bash
nvm --version
```

If NVM is not installed, install it following the official NVM documentation.

---

## 3. Install Node.js 22 LTS

```bash
nvm install 22
```

Switch to Node 22:

```bash
nvm use 22
```

Verify:

```bash
node -v
npm -v
```

Expected:

```text
v22.x.x
```

---

## 4. Install Angular CLI 18

First, verify if Angular CLI is already installed.

```bash
ng version
```

### If Angular CLI is not installed

Install Angular CLI 18.2.21:

```bash
npm install -g @angular/cli@18.2.21
```

---

### If Angular CLI is already installed

Verify the version:

```bash
ng version
```

If the installed version is **18.2.21**, no further action is required.

If the version is different, update it:

```bash
npm uninstall -g @angular/cli
npm install -g @angular/cli@18.2.21
```

Verify again:

```bash
ng version
```

Expected:

```text
Angular CLI: 18.2.21
```

</details>

---

<details>
<summary><strong>Windows Setup</strong></summary>

## 1. Verify Git

```bash
git --version
```

If Git is not installed, install it from the official Git installer.

---

## 2. Install NVM for Windows

Verify:

```bash
nvm version
```

If NVM is not installed, install **NVM for Windows**.

---

## 3. Install Node.js 22 LTS

```bash
nvm install 22
```

```bash
nvm use 22
```

Verify:

```bash
node -v
npm -v
```

Expected:

```text
v22.x.x
```

---

## 4. Install Angular CLI 18

Verify whether Angular CLI is already installed.

```bash
ng version
```

### If Angular CLI is not installed

Install Angular CLI 18.2.21:

```bash
npm install -g @angular/cli@18.2.21
```

---

### If Angular CLI is already installed

Verify the version:

```bash
ng version
```

If the installed version is **18.2.21**, no further action is required.

If the version is different, update it:

```bash
npm uninstall -g @angular/cli
npm install -g @angular/cli@18.2.21
```

Verify again:

```bash
ng version
```

Expected:

```text
Angular CLI: 18.2.21
```

</details>

---

# Clone the Repository

Navigate to your workspace.

```bash
cd <workspace>
```

Clone the repository.

```bash
git clone <repository-url>
```

Enter the project.

```bash
cd nextbank-ui
```

---

# Select the Correct Node Version

If you already have multiple Node.js versions installed, switch to the version supported by this project.

```bash
nvm use 22
```

Verify:

```bash
node -v
```

Expected:

```text
v22.x.x
```

---

# Install Dependencies

```bash
npm install
```

---

# Run the Application

Start the Angular development server.

```bash
npm start
```

Open your browser and navigate to:

```text
http://localhost:4200
```

If the installation completed successfully, the default Angular application should load successfully.
