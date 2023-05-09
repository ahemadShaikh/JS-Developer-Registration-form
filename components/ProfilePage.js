import React from 'react'

const ProfilePage = () => {
    return (
        <>
            <section className="profile-screen-body">
                <div className="account-settings">
                    <p>Account Settings</p>
                </div>

                <div className="profile-contents">
                    <div className="upper">
                        <div className="profile-pic">
                            <img className='marry' src="./images/marry.png" alt="profile picture" />
                            <img className='camera' src="./images/camera.png" alt="camera icon" />
                        </div>
                        <div className="titles">
                            <h3>Marry Doe</h3>
                            <p>Marry@Gmail.com</p>
                        </div>
                    </div>
                    <div className="down">
                        <p>Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ProfilePage