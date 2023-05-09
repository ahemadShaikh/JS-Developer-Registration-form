
const LandingPage = () => {
    return (
        <>
            <section className='landing-screen-body'>
                <div className="landing-screen-content">
                    <div className="landing-screen-heading">
                        <h1>Welcome to PopX</h1>
                    </div>
                    <div className="landing-screen-desc">
                        <p>Lorem ipsum dolor sit amef,</p>
                        <p>consectetur adipiscing elit.</p>
                    </div>
                    <div className="create-account-btn">
                        <button>Create Account</button>
                    </div>
                    <div className="login-btn login-link">
                        <button>Already Registered? <a href="#">Login</a></button>
                    </div>
                    {/* <div className="login-link">
                        <h3>Already Registered? <a href="#">Login</a></h3>
                    </div> */}
                </div>
            </section>
        </>
    )
}

export default LandingPage;