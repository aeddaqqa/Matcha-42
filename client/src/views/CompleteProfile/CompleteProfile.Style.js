import styled from "styled-components";

export const CompleteProfileContainer = styled.div`
  width: 90%;
  margin: auto;
  height: 1500px;
  display: flex;
  align-items: center;
  justify-content: start;
  flex-flow: column nowrap;
  h1 {
    flex : 0 0 10%;
    margin-bottom: 3rem;
    font-size: 2rem;
    background-image: linear-gradient(
      from left to right,
      "${(props) => props.theme.colors.primary}",
      "${(props) => props.theme.colors.secondary}"
    );
    background-size: 100%;
    background-repeat: repeat;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
  }
  .steper {
    width: 100%;
    max-width: 1200px;
    flex: 0 0 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-width: 320px;
    &--steps {
      width: 100%;
      flex : 1 1 10%;
    }
    &--step {
      width: 100%;
      flex : 1 1 90%;
      display: flex;
      flex-flow: column nowrap;
      align-items: center;
      gap : 1%;
      &__content {
        box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
        width: 100%;
        flex: 1 1 79%;
      }
      &__buttons {
        flex: 1 1 20%;
        width: 50%;
        display: flex;
        justify-content: space-between;
        padding-bottom: 4rem;
    }
    &__button {
      height: 50px;
      width: 150px;
      &--next {
        background-image: ${(props) => props.theme.background.secondary};
      }
      &--back {
        color : ${(props) => props.theme.colors.primary};
      }
    }
  }
`;
