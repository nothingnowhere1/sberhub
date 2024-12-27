import z from "zod";
import i18n from "../../locales/I18n";

const t = i18n.t.bind(i18n);

export const zodT = (key: string, args?: Record<'number', number>) => t(key, {...args, ns: 'zod'});

export const ZodRequired = {
    string: () => z.string({required_error: zodT('required')}),
};