import React from "react";
import Downshift from "downshift";
import styled from "styled-components";

const HeroSearch = ({ items, onInputValueChange, onSelect, loading }) => {
  return (
    <Downshift
      onInputValueChange={value => onInputValueChange(value)}
      onSelect={onSelect}
      itemToString={value => value && `${value.id} ${value.name}`}
      defaultHighlightedIndex={0}
      render={({
        getInputProps,
        getItemProps,
        isOpen,
        inputValue,
        selectedItem,
        highlightedIndex
      }) => {
        return (
          <div>
            <Input {...getInputProps({ placeholder: "Cerca un luogo..." })} />
            {loading ? (
              <Loading>Caricamento in corso</Loading>
            ) : (
              isOpen && (
                <Results>
                  {items.map((item, index) => (
                    <Result
                      {...getItemProps({ item })}
                      key={index}
                      bold={selectedItem === item}
                      selected={highlightedIndex === index}
                    >
                      {item.id} {item.name}
                    </Result>
                  ))}
                </Results>
              )
            )}
          </div>
        );
      }}
    />
  );
};

const Input = styled.input`
  border: none;
  font-size: 0.875rem;
  padding: 0.5rem;
  letter-spacing: 0.1em;
  padding: 1rem;
  padding-left: 1rem;
  cursor: pointer;
  &:focus {
    outline: none;
  }
`;

const Loading = styled.div`
  border: 1px solid black;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Results = styled.div`
  padding: 0.5rem;
  font-size: 0.875rem;
  font-family: sans-serif;
`;

const Result = styled.div`
  padding: 0.5rem 0;
  padding-left: 1rem;
  letter-spacing: .1em;
  background-color: ${props => (props.selected ? "#e74f30" : "white")};
  color: ${props => (props.selected ? "white" : "black")};
  font-weight: ${props => (props.bold ? "bold" : "normal")};
  cursor: pointer;
  &:hover{
    background-color: #e74f30;
  }
  
`;

export default HeroSearch;
