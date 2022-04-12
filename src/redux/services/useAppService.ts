import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ApplicationModel } from "models/ApplicationModel";
import { ReduxState } from "redux/rootReducer";

/* ****************** Interfaces ****************** */
// interface GetCompaniesResponseModel {
//   totalCount: number;
//   data: CompanyModel[];
// }

/* ****************** Variables ****************** */
const appBaseUrl = process.env.REACT_APP_APP_BASE_URL;
const functionsKey = process.env.REACT_APP_API_HOST_KEY_APP;

const baseQuery = fetchBaseQuery({
  baseUrl: appBaseUrl,
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as ReduxState).app.accessToken;

    if (token) {
      headers.set("authorization", `Bearer ${token}`);
      headers.set("x-functions-key", functionsKey);
      headers.set("Content-Type", "application/json");
    }

    return headers;
  },
});

export const appApi = createApi({
  reducerPath: "appApi",
  baseQuery,
  endpoints: (builder) => ({
    getApplicationById: builder.query<ApplicationModel, string>({
      query: (id) => `applications/${id}`,
      transformResponse: (response: ApplicationModel) => ({
        accessPermissionName: response.accessPermissionName,
        id: response.id,
        description: response.description,
        name: response.name,
        url: response.url,
      }),
    }),
  }),
});

export const { useGetApplicationByIdQuery } = appApi;
