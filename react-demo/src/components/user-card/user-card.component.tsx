import React from 'react';
import styles from './user-card.style.module.css'

type UserCardProps = {
  firstName: string;
  lastName: string;
  email: string;
}

class WithpropsUserCard extends React.Component<UserCardProps> {
  render() {
    const { firstName, lastName, email } = this.props;

    return (
      <div className={styles.userCard}>
        <div className={styles.userCardPicture}>
          <img src='data:image/png;base64,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' />
        </div>
        <div className={styles.userCardInformation}>
          <div>
            <h2>Full Name</h2>
            <span>{firstName} {lastName}</span>
          </div>
          <div>
            <h2>Email</h2>
            <span>{email}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default WithpropsUserCard;
