import {useI18n} from "vue-i18n";

export const currencyToFormat = (value: number) => {
	const { locale } = useI18n()
	return new Intl.NumberFormat(locale.value, { minimumFractionDigits: 0, maximumFractionDigits: 2, style: 'currency', currency: 'USD' }).format(value)
}