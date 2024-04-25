import {
  SearchBar1,
  SearchContainer1,
  TextSearch1,
  InputContainer,
} from "./SearchBarStyles";
import { SearchBarProps } from "./Types";

const SearchBar: React.FC<SearchBarProps> = ({ placeholder, icon, title }) => {
  return (
    <SearchContainer1>
      <TextSearch1>{title}</TextSearch1>
      <InputContainer icon={icon}>
        <SearchBar1 placeholder={placeholder} />
      </InputContainer>
    </SearchContainer1>
  );
};

export default SearchBar;
