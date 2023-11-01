import { FilterDiv, FilterInput, FilterLabel } from "./Filter.styled";

export default function Filter({ onInputHandler }) {
  return (
    <FilterDiv>
      <FilterLabel htmlFor="search">Find contacts by name:</FilterLabel>
      <FilterInput
        type="text"
        name="search"
        placeholder="John Doe"
        onChange={(e) => {
          onInputHandler(e.target.value);
        }}
      />
    </FilterDiv>
  );
}
