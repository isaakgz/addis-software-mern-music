// Emotion styles
// Inherited styles from AuthForm

import styled from "@emotion/styled";

export const SuggestionsContainer = styled.div`
  background-color: rgba(255, 255, 255, 0.829);
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 5px;
  max-height: 150px;
  overflow-y: auto;
  margin-top: 5px;
  position: absolute; /* Make the suggestions container absolute */
  width: 100%;
  max-width: 400px;
  z-index: 10; /* Increase z-index to ensure it overlaps other fields */
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  top: 100%; /* Position it directly below the input */
`;

export const SuggestionItem = styled.div`
  padding: 0.75rem;
  background-color: rgba(255, 255, 255, 0.1);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  cursor: pointer;
  color: black;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: rgb(255, 255, 255);
  }

  &:last-child {
    border-bottom: none;
  }
`;

// Wrapper around song input and suggestions
export const InputWrapper = styled.div`
  position: relative; /* Set relative positioning for the suggestions to be absolute inside */
  width: 100%;
`;