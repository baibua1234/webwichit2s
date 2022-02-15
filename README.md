# Guides

## 1. setup project

```sh
npm init next-app todos
cd todos
npm i firebase firebase-admin
npm run dev
```

## 2. create `firebase/initFirebase.js`

```js
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBWHAmP0vspjY9zgq99gh7-AWL0oI1YX_8",
  authDomain: "sombatstodos.firebaseapp.com",
  projectId: "sombatstodos",
  storageBucket: "sombatstodos.appspot.com",
  messagingSenderId: "438809432542",
  appId: "1:438809432542:web:0ece1b9ab2e28d80be8d4f"
};

const app = initializeApp(firebaseConfig);
export default app
```

## 3. 
