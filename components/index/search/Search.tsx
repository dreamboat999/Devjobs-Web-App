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

  const searchSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();

    const serarchQ = searhQuery.trim().toLowerCase();
    const locationQ = locationQuery.trim().toLowerCase();
    const isFullTime = isChecked;

    const updatedFiters = {
      search: serarchQ,
      location: locationQ,
      isFullTiem: isFullTime,
    };

    dispatch(jobActions.setFiters(updatedFiters));

    if (isModal) {
      dispatch(jobActions.toggleModal());
      document.body.style.overflow = 'visible';
    }
  };

  const filterHandler = () => {
    dispatch(jobActions.toggleModal());
    document.body.style.overflow = 'hidden';
  };

  if (typeof windowWidth !== undefined && windowWidth! > 767) {
    return (
      <SearchBar onSubmit={searchSubmit}>
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
        <Button className="primary">Search</Button>
      </SearchBar>
    );
  }

  return (
    <SearchBar onSubmit={searchSubmit}>
      <InputControl className="search">
        <SearchInput
          placeholder={searchPlaceholder}
          onChange={searchInputHandler}
          value={searhQuery}
        />
      </InputControl>
      <Button className="filter" onClick={filterHandler} type="button">
        <FilterIcon />
      </Button>
      <Button className="search">
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
            <Button className="primary" onClick={searchSubmit}>
              Search
            </Button>
          </Modal>
        )}
      </AnimatePresence>
    </SearchBar>
  );
};

export default Search;
