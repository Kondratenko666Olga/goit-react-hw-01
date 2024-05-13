import styles from './FriendList.module.css'

const FriendList = ({friends}) => {
    return (
        <div className={styles.containerFriend}>
            <ul className={styles.listFriends}>
                {friends.map(({avatar, name, isOnline, id}) => {
                    return(<li className={styles.listItem} key={id}>
                        <div>
                            <img src={avatar} alt={name} width="48" />
                            <p className={styles.title} >{name}</p>
                            <p className={isOnline ? styles.online : styles.offline }> 
                            {isOnline ? "Online" : "Offline"} 
                            </p>
                        </div>
                    </li>)
                })}
            </ul>
        </div>
    )
}

export default FriendList;