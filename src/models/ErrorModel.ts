export interface ErrorModel {
  errorMessage?: string | null;
  errorCode?: number;
  status?: number;
  requestURL?: string;
  requestData?: unknown;
}

/**
 * TODO: finish this example...
 * Example of use:
 * 
const [postNewThingy, { data: resData, isLoading: isNewThingyLoading, isError: isNewThingyError, error: newThingyError, isSuccess: isNewThingySuccess }] = usePostNewThingyMutation();

// Handle Errors
useEffect(() => {
    if (isError && error && isFetchBaseQueryErrorType(error)) {
        const err = error.data as ErrorModel;

        // TODO: message here is antd
        message.err(err.errorMessage);
    }
}, [isError, error]);

useEffect(() => {
    if (isSuccess && resData) {
        success();
    }
}, [isSuccess, resData, success])
 */
