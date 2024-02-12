export type TInputType = 'text' | 'password' | 'number' | 'email'

export interface IVInput {
    modelValue?: string | number
    label?: string
    name?: string
    isDisabled?: boolean
    placeholder?: string
    inputType?: TInputType
    error?: string
}