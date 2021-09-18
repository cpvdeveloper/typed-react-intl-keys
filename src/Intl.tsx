import type { ReactNode } from "react";
import type { IntlFormatters } from "react-intl";
import type { Props as ReactIntlFormattedMessageProps } from "react-intl/src/components/message";
import {
  FormattedMessage as ReactIntlFormattedMessage,
  useIntl as useReactIntl,
} from "react-intl";
import enMessages from "./en.json";

// Our new union type of all available message IDs.
type IntlMessageKeys = keyof typeof enMessages;

// The arguments to the original formatMessage function.
type FormatMessageArgs = Parameters<IntlFormatters["formatMessage"]>;

// Extend the original FormattedMessage props.
type FormattedMessageProps = ReactIntlFormattedMessageProps<
  Record<string, ReactNode>
> & {
  id?: IntlMessageKeys;
};

export function FormattedMessage({ id, ...rest }: FormattedMessageProps) {
  return <ReactIntlFormattedMessage id={id} {...rest} />;
}

export function useIntl() {
  // Pull out the original formatMessage function.
  const { formatMessage, ...rest } = useReactIntl();

  // Re-write the formatMessage function but with a strongly-typed id.
  const typedFormatMessage = (
    descriptor: FormatMessageArgs[0] & {
      id?: IntlMessageKeys;
    },
    values?: FormatMessageArgs[1],
    options?: FormatMessageArgs[2]
  ) => {
    return formatMessage(descriptor, values, options);
  };

  return {
    ...rest,
    formatMessage: typedFormatMessage,
  };
}
