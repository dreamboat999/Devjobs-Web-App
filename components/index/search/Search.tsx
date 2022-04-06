import React, { useState } from 'react';

import { AnimatePresence } from 'framer-motion';

import { useSelector, useDispatch } from 'react-redux';
import { RootState, jobActions } from '../../../store';

import {
  SearchBar,
  InputControl,
  SearchInput,
  CheckBoxWrapper,
  CheckBox,
} from './SearchStyles';

import { Button } from '../../UI/button/ButtonStyles';

import SearchIcon from '../../../public/assets/desktop/icon-search.svg';
import LocationIcon from '../../../public/assets/desktop//icon-location.svg';
import FilterIcon from '../../../public/assets/mobile/icon-filter.svg';
import useWindowWidth from '../../../hooks/useWindowWidth';
import Modal from '../../modal/Modal';

const Search: React.FC = () => {
  const [isChecked, setIsCheked] = useState<boolean>(false);
  const [searhQuery, setSearhQuery] = useState<string>('');
  const [locationQuery, setLocationQuery] = useState<string>('');

  const { isModal } = useSelector((state: RootState) => state.jobs);
  const dispatch = useDispatch();

  const windowWidth = useWindowWidth();

  const searchInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearhQuery(e.target.value);
  };
  const locationInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocationQuery(e.target.value);
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
    if (typeof windowWidth !== undefined && windowWidth! < 767) {
      dispatch(jobActions.toggleModal());
    }
  };

  if (typeof windowWidth !== undefined && windowWidth! > 767) {
    return (
      <SearchBar>
        <InputControl className="search">
          <SearchIcon />
          <SearchInput
            placeholder={searchPlaceholder}
            onChange={searchInputHandler}
            value={searhQuery}
          />
        </InputControl>
        <InputControl className="location">
          <LocationIcon />
          <SearchInput
            placeholder="Filter by location…"
            onChange={locationInputHandler}
            value={locationQuery}
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
          value={searhQuery}
        />
      </InputControl>
      <Button
        className="filter"
        onClick={() => {
          dispatch(jobActions.toggleModal());
        }}
      >
        <FilterIcon />
      </Button>
      <Button className="search" onClick={searchHandler}>
        <SearchIcon />
      </Button>
      <AnimatePresence>
        {isModal && (
          <Modal>
            <InputControl className="location">
              <LocationIcon />
              <SearchInput
                placeholder="Filter by location…"
                onChange={locationInputHandler}
                value={locationQuery}
              />
            </InputControl>
            <span />
            <CheckBoxWrapper>
              <CheckBox
                isCheked={isChecked}
                aria-checked={isChecked}
                onClick={() => {
                  setIsCheked((prevState) => !prevState);
                }}
              />
              <p
                onClick={() => {
                  setIsCheked((prevState) => !prevState);
                }}
              >
                Full Time Only
              </p>
            </CheckBoxWrapper>
            <Button className="primary" onClick={searchHandler}>
              Search
            </Button>
          </Modal>
        )}
      </AnimatePresence>
    </SearchBar>
  );
};

export default Search;
