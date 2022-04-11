/// <reference types="react-scripts" />

declare namespace NodeJS {
  interface ProcessEnv {
    REACT_APP_APP_BASE_URL: string;
    REACT_APP_API_HOST_KEY_APP: string;
  }
}
