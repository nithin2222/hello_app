import "./register.css"

export default function Register() {
  return (
    <div className="login">
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className="loginLogo">hello :)</h3>
                <span className="loginDesc">Connect with friends and the world around you on hello App</span>
            </div>
            <div className="loginRight">
                <div className="loginBox">
                    <input placeholder="Username" className="loginInput"/>
                    <input placeholder="Email"className="loginInput"/>
                    <input placeholder="Enter Password" className="loginInput" />
                    <input placeholder="Re-Enter Password" className="loginInput" />
                    <button className="loginButton"> Sign Up</button>
                   
                    <button className="loginRegisterButton">Log into Account</button>
                </div>
            </div>
        </div>
    </div>
  )
}
