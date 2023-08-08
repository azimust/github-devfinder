import { UserStat } from 'components/UserStat';
import styles from './UserCard.module.scss';
import { LocaleGithubUser } from 'types';

interface UserCardProps extends LocaleGithubUser { }

export const UserCard = (props: UserCardProps) => {
  return (
    <div className={styles.userCard}>
      <UserStat
        followers={props.followers}
        following={props.following}
        repos={props.repos}
      />
    </div>
  )
};
