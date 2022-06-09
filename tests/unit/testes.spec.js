import { mount } from "@vue/test-utils";
import FormsCadastro from "../../src/components/Form/FormsCadastro.vue"

describe("FormsCadastro - Unit", () => {
    it('teste de existencia de ID', () => {
        const wrapper = mount(FormsCadastro)
        expect('#razaoSocial').toBeTruthy()
    })
    it('teste de inserção de dados', async () =>{
        const wrapper = mount(FormsCadastro)
        //const botao = wrapper.find('#btn')
        const razaoSocialTeste = wrapper.find('#razaoSocial')
        await razaoSocialTeste.setValue('teste')
        expect(wrapper.find('#razaoSocial').element.value).toBe('teste')
    })
    it('teste de função', async () => {
        const wrapper = mount(FormsCadastro)
        const botao = wrapper.find('#btn')
        const razaoSocialTeste = wrapper.find('#razaoSocial')
        await razaoSocialTeste.setValue('teste')
        const nomeFantasiaTeste = wrapper.find('#nomeFantasia')
        await nomeFantasiaTeste.setValue('teste')
        const cnpjTeste = wrapper.find('#cnpj')
        await cnpjTeste.setValue('teste')
        //await botao.trigger('click')
        expect(wrapper.emitted()).toBeTruthy()
    })
    it('teste de inserção de dados', async () => {
        const wrapper = mount(FormsCadastro)
        //const razaoSocialTeste = wrapper.find('#razaoSocial')
        //await razaoSocialTeste.setValue('teste')
        //expect(razaoSocialTeste.value).toBeNaN
        //expect(razaoSocialTeste.value).toBeTruthy
        //const nomeFantasiaTeste = wrapper.find('#nomeFantasia')
        //await nomeFantasiaTeste.setValue('teste')
        //expect(nomeFantasiaTeste.value).toBeNaN
        //expect(nomeFantasiaTeste.value).toBeTruthy
        const cnpjTeste = wrapper.find('#cnpj')
        await +cnpjTeste.setValue(654654)
        expect(cnpjTeste.value).toBeNaN
        //expect(cnpjTeste.value).toBeTruthy
    })
})