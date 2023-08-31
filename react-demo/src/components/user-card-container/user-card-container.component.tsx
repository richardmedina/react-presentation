import { useState } from 'react';
import SearchInput from '../search-input/search-input.component';
import UserCardList from '../user-card-list/user-card-list.component';

type SearchUserCardContainerProps = {
    users: Array<{
        firstName: string;
        lastName: string;
        email: string;
    }>;
}

const SearchUserCardContainer: React.FC<SearchUserCardContainerProps> = (props: SearchUserCardContainerProps) => {

    const [filter, setFilter] = useState<string>('');

    const handleChange = (name: string, value: string) => {
        setFilter(value);
    }

    const filteredUsers = props.users.filter(user => { 
        const fullName = `${user.firstName} ${user.lastName}`;
        return fullName.toLowerCase().includes(filter.toLowerCase());
    });

    return (
        <div>
            <SearchInput name="filter" value={filter} onChange={handleChange} />
            <hr />
            <UserCardList users={filteredUsers} />
        </div>
    );
}


export default SearchUserCardContainer;