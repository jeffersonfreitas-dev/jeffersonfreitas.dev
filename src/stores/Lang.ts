import { defineStore } from 'pinia'

export const useLangStore = defineStore('lang', {
    state: () => ({
        langs: [
            {language: 'pt', country: 'br', name: 'Português'},
            {language: 'en', country: 'usa', name: 'English'}
        ],
        langCode: localStorage.getItem('lang') || 'pt'
    }),
    getters: {
        currentLang: (state) => {
          return state.langs.find(l => l.language === state.langCode) || state.langs[0];
        },
        allLangs: (state) => state.langs
    },
    actions: {
        setLang(langCode){
            const found = this.langs.find(l => l.language === langCode);
            if(found) {
                this.langCode = langCode;
                localStorage.setItem('lang', langCode);
            }
        }
    }
})