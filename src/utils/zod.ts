import z from "zod";
import i18n from "../I18n";

const t = i18n.t.bind(i18n);

export const zodT = (key: string) => t(key, {ns: 'zod'});

export const ZodRequired = {
    string: () => z.string({required_error: zodT('required')}),
};