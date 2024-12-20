import './index.css'

const UserProfile = (props) => {
    const { userDetails } = props
    const { imageUrl, userName, role } = userDetails
    console.log(userDetails)
    return (
        <div className="user-item">
            <img src={imageUrl} alt="user-img" />
            <div className='details'>
                <h3>{userName}</h3>
                <h5>{role}</h5>
            </div>
        </div>
    )
}



export default UserProfile