import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";

const firebaseConfig = {
apiKey: "AIzaSyArnxJYRBOQvRziJFgzmE9iBIM3Z6QZWHQ",
authDomain: "fantashop-7ee2f.firebaseapp.com",
projectId: "fantashop-7ee2f",
storageBucket: "fantashop-7ee2f.appspot.com",
messagingSenderId: "61274385465",
appId: "1:61274385465:web:d6c38e84ed0d1496a571e8",
measurementId: "G-W7RRY8T1Z6"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
