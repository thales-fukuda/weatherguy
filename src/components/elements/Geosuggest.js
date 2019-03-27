import styled from 'styled-components';
import Geosuggest from 'react-geosuggest';
import PropTypes from 'prop-types';

export default styled(Geosuggest)`
  position: absolute;
  top: ${props => (props.isWeatherDisplayed ? '12%' : '47%')};
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: 1s ease all;
  z-index: 2;
  .geosuggest {
    &__input {
      &-wrapper{
        display: flex;
        justify-content: center;
      }
      padding: 15px;
      font-size: 18px;
      color: #f2f2f2;
      border: none;
      border-radius: 19px;
      height: 40px;
      width: 260px;
      background: rgba(255, 255, 255, .1);
      box-sizing: border-box;
      &:focurs {
        color: #f2f2f2;
      }
      &::placeholder {
        color: #f2f2f2;
        opacity: .22;
      }
    }
    &__suggests{
      width: 260px;
      padding: 5px;
      list-style: none;
      background-color: #ededed;
      color: #2e2e2e;
      border-radius: 5px;
      &-wrapper {
        position: absolute;
        top: 40px;
        display: flex;
        justify-content: flex-start;
        box-sizing: border-box;
      }
      &--hidden {
        max-height: 0;
        overflow: hidden;
        border-width: 0;
        display: none;
      }
    }
    &__item {
      padding: 10px 5px;
      box-sizing: border-box;
      &--active {
        background: #2e2e2e;
        color: #ededed;
      }
    }
  }

`.propTypes = {
    isWeatherDisplayed: PropTypes.bool.isRequired,
  };
