
type SearchInputProps = {
    name: string;
    value: string;
    onChange: (name: string, value: string) => void;
}


const SearchInput: React.FC<SearchInputProps> = ( props: SearchInputProps) => {

    const handleChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        props.onChange(props.name, e.target.value);
    }

    return (
        <div>
            <input type="text" onChange={handleChange} />
        </div>
    );
}


export default SearchInput;

