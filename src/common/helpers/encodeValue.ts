interface encodedValueProps {
  isUrl: boolean;
  value: string;
}

export const encodeValue = ({ isUrl, value }: encodedValueProps): string => {
  let encodedValue = String(value);

  if (
    encodedValue.match(/\//g) ||
    encodedValue.match(/\\/g) ||
    encodedValue.match(/\+/g) ||
    encodedValue.match(/#/g) ||
    encodedValue.match(/~/g)
  ) {
    encodedValue = encodedValue.replaceAll(/\//g, "%2F");
    encodedValue = encodedValue.replaceAll(/\\/g, "%5C%5C");
    encodedValue = encodedValue.replaceAll(/\+/g, "%2B");
    encodedValue = encodedValue.replaceAll(/#/g, "%23");
    encodedValue = encodedValue.replaceAll(/~/g, "%7E");
  }

  encodedValue = isUrl ? encodeURIComponent(encodedValue) : encodedValue;

  return encodedValue;
};
