import FunctionalUserCard from "../funcional-user-card/functional-user-card.component";

type UserCardListProps = {
    users: Array<{
        firstName: string;
        lastName: string;
        email: string;
    }>;
}


const UserCardList: React.FC<UserCardListProps> = (props: UserCardListProps) => (
    <div>
            {
                (props.users ?? []).map(user => (
                    <div style={{ width: '250px', display: 'inline-block'}}>
                        <FunctionalUserCard { ...user } />
                    </div>
                    )
                )
            }
    </div>
);


export default UserCardList;
