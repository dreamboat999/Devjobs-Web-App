import React, { useState } from 'react';

import {
  SearchBar,
  InputControl,
  SearchInput,
  CheckBoxWrapper,
  CheckBox,
} from './SearchStyles';

import { Button } from '../../UI/button/ButtonStyles';

import SearchIcon from '../../../public/images/desktop/icon-search.svg';
import LocationIcon from '../../../public/images/desktop//icon-location.svg';
import useWindowWidth from '../../../hooks/useWindowWidth';

const Search: React.FC = () => {
  const [isChecked, setIsCheked] = useState<boolean>(false);
  const [searhQuery, setSearhQuery] = useState<string>('');
  const [locationQuery, setLocationQuery] = useState<string>('');

  const windowWidth = useWindowWidth();

  const searchInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearhQuery(e.target.value);
  };
  const locationInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearhQuery(e.target.value);
  };

  const searchPlaceholder =
    typeof windowWidth !== undefined && windowWidth! > 1000
      ? 'Filter by title, companies, expertise…'
      : 'Filter by title…';

  const checkText =
    typeof windowWidth !== undefined && windowWidth! > 1050
      ? 'Full Time Only'
      : ' Full Time';

  const searchHandler = () => {
    const serarchQ = searhQuery.trim();
    const locationQ = locationQuery.trim();
    const isFullTime = isChecked;

    console.log({
      serarchQ,
      locationQ,
      isFullTime,
    });
  };

  if (typeof windowWidth !== undefined && windowWidth! > 767) {
    return (
      <SearchBar>
        <InputControl className="search">
          <SearchIcon />
          <SearchInput
            placeholder={searchPlaceholder}
            onChange={searchInputHandler}
          />
        </InputControl>
        <InputControl className="location">
          <LocationIcon />
          <SearchInput
            placeholder="Filter by location…"
            onChange={locationInputHandler}
          />
        </InputControl>
        <CheckBoxWrapper>
          <CheckBox
            isCheked={isChecked}
            onClick={() => {
              setIsCheked((prevState) => !prevState);
            }}
          />
          <p
            onClick={() => {
              setIsCheked((prevState) => !prevState);
            }}
          >
            {checkText}
          </p>
        </CheckBoxWrapper>
        <Button className="primary" onClick={searchHandler}>
          Search
        </Button>
      </SearchBar>
    );
  }

  return (
    <SearchBar>
      <InputControl className="search">
        <SearchInput
          placeholder={searchPlaceholder}
          onChange={searchInputHandler}
        />
      </InputControl>
      <Button className="primary" onClick={searchHandler}>
        <SearchIcon />
      </Button>
    </SearchBar>
  );
};

export default Search;
