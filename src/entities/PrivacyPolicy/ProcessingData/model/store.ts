
import {defineStore} from 'pinia';
import {ref} from 'vue';

const namespace = 'privacy-policy'
export const usePrivacyPolicyStore = defineStore(namespace, () => {
    const agreementAccepted = ref<string>(localStorage.getItem('agreementAccepted') || null)
    const verificationAge = ref(false)
    const privacyPolicyCheckbox = ref(false)
    const termsOfUseCheckbox = ref(false)

    const setAgreementAccepted = () => {
        localStorage.setItem('agreementAccepted', agreementAccepted.value)
    }

    return {
        agreementAccepted,
        verificationAge,
        privacyPolicyCheckbox,
        termsOfUseCheckbox,
        setAgreementAccepted
    }
})