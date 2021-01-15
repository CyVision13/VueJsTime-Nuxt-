import { extend } from "vee-validate";
import { required, min, email } from "vee-validate/dist/rules";

extend("required", required);
extend("min", min);
extend("email", email);