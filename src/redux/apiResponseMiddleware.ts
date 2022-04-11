import {
  Middleware,
  MiddlewareAPI,
  isRejectedWithValue,
} from "@reduxjs/toolkit";

export const rtkQueryErrorLogger: Middleware =
  (api: MiddlewareAPI) => (next) => (action) => {
    if (isRejectedWithValue(action)) {
      console.log("middleware: ", action);
      switch (action.payload.originalStatus) {
        case 401:
          console.warn("Refetch auth token");
          break;

        case 4040:
          console.error("Unable to find resource");
          break;
      }
    }

    return next(action);
  };
