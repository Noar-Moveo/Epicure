import { SearchBar1, SearchContainer1, TextSearch1, InputContainer } from "./SearchBarStyles";
import { SearchBarProps } from "./Types";
import { SearchTitle } from "../../data/resources";


const SearchBar: React.FC<SearchBarProps> = ({ placeholder, icon }) => {
    return (
        <SearchContainer1>
          <TextSearch1>
            {SearchTitle}
          </TextSearch1>
          <InputContainer icon={icon}>
            <SearchBar1 placeholder={placeholder} />
          </InputContainer>
        </SearchContainer1>
      );
    };

export default SearchBar;
