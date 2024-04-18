import { SearchBar1, SearchContainer1, TextSearch1, InputContainer } from "./SearchBarStyles";

export interface SearchBarProps {
  placeholder: string;
  icon: string; 
}

const SearchBar: React.FC<SearchBarProps> = ({ placeholder, icon }) => {
    return (
        <SearchContainer1>
          <TextSearch1>
            Epicure works with the top chef restaurants in Tel Aviv
          </TextSearch1>
          <InputContainer icon={icon}>
            <SearchBar1 placeholder={placeholder} />
          </InputContainer>
        </SearchContainer1>
      );
    };

export default SearchBar;
