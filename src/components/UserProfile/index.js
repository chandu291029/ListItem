import './index.css'

const UserProfile = props => {
  const {UserDetalis} = props
  const {imageUrl, name, role} = UserDetalis
  return (
    <div>
      <img src={imageUrl} alt="avatar" className="avatar" />
      <div>
        <h1>{name}</h1>
        <p>{role}</p>
      </div>
    </div>
  )
}
export default UserProfile
