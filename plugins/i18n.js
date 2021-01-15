import { values } from "core-js/fn/array";
import { configure } from "vee-validate";

export default function({ app }) {
    defaultMessage(field, (values_) => {
        values._field = app.i18n.t(`${field}`);
        return app.i18n.t(`validation.${value._rule_}`, values);
    });
}