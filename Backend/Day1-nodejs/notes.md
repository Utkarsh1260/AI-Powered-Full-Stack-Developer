# 🚀 Day 1 — Node.js Server Setup

## ⚡ Commands Used

```bash
npm init -y
npm i -g nodemon
npx nodemon
```

## 📌 Quick Guide

### 1️⃣ Create `server.js`

Create a `server.js` file in the **root folder** of your project.

> 📁 In my case, the root folder is `Day1-nodejs`.

### 2️⃣ Initialize Node.js

```bash
npm init -y
```

This creates the `package.json` file for the Node.js project.

### 3️⃣ Install Nodemon

```bash
npm i -g nodemon
```

Nodemon automatically restarts the Node.js application whenever changes are detected in the project files.

> 💡 `nodemon` = **Node Monitor**

### 4️⃣ Run the Server with Nodemon

```bash
npx nodemon
```

---

## ⚠️ Note / Important Twist

If you run:

```bash
npm init -y
```

**before** creating `server.js`, you may encounter an error when running:

```bash
npx nodemon
```

In that case, open `package.json` and change:

```json
"main": "index.js"
```

to:

```json
"main": "server.js"
```

Then run:

```bash
npx nodemon
```

✅ However, following the steps above in the given order is recommended.

---

## 🎯 Learning

Today, we learned how to **create and run our first Node.js server**. 🚀