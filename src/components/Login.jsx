import React , { useContext} from 'react';
import { UserContext } from '../App';
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { Button, Form, Input } from 'antd';


const firebaseConfig = {
apiKey: "AIzaSyCgKiaadHQH1ln6a_8cbxoH3Ca7fV6Vksk",
authDomain: "my-first-firestore-cd.firebaseapp.com",
projectId: "my-first-firestore-cd",
storageBucket: "my-first-firestore-cd.appspot.com",
messagingSenderId: "928212276433",
appId: "1:928212276433:web:6ddf6e4ab36bc6422da1f0"
};



// Initialize Firebase

export default function Login() {
const { setUser } = useContext(UserContext)

    const handleLogin = ({ email, password }) => {
    const auth = getAuth(app); // connect to firebase/auth
    const app = initializeApp(firebaseConfig); // connect to firebase
      // login with Firebase Auth

    signInWithEmailAndPassword(auth, email, password)
        .then(res => setUser(res.user))
        .catch(console.error)
    }
    const handleGoogleLogin = () => {
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
        .then(res => setUser(res.user))
        .catch(console.error)
    }
    return (
    <section style={{ padding: '2em' }}>
        <Form
        onFinish={handleLogin}
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        >
        <Form.Item label="Email" name="email"
            rules={[{ required: true, message: 'Please enter a valid email' }]}
        >
            <Input />
        </Form.Item>
        <Form.Item label="Password" name="password"
            rules={[{ required: true, message: 'Please enter your password' }]}
        >
            <Input.Password />
        </Form.Item>
        <Form.Item
            wrapperCol={{ span: 16, offset: 8 }}
        >
            <Button type="primary" htmlType="submit">Login</Button>
        </Form.Item>
        <Form.Item
            wrapperCol={{ span: 16, offset: 8 }}
        >
            <Button onClick={handleGoogleLogin}>Google Login</Button>
        </Form.Item>
        </Form>
    </section>
    )
}