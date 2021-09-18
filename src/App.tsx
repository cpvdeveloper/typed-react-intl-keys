import { FormattedMessage, useIntl } from "./Intl";
import "./App.css";

export default function App() {
  const { formatMessage } = useIntl();
  return (
    <div className="App">
      <h2>
        <FormattedMessage
          id="helloWorld"
          values={{ component: "FormattedMessage" }}
        />
      </h2>
      <h2>
        {formatMessage({ id: "helloWorld" }, { component: "formatMessage" })}
      </h2>
      <h4>
        <FormattedMessage id="goodbye" />
      </h4>
      <h4>{formatMessage({ id: "goodbye" })}</h4>
    </div>
  );
}
