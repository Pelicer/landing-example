import it from '@playwright/test';
import { test, expect } from '@playwright/test';
import { FormData } from './data/FormData';

test.describe('Contact component testing', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('http://localhost:3000')
    });

    it('Should populate every input in the form', async ({ page }) => {
        await page.fill(FormData.Nome.selector, FormData.Nome.value)
        await page.fill(FormData.Email.selector, FormData.Email.value)
        await page.fill(FormData.Assunto.selector, FormData.Assunto.value)
        await page.fill(FormData.Telefone.selector, FormData.Telefone.value)
        await page.fill(FormData.Mensagem.selector, FormData.Mensagem.value)
        await page.screenshot({ path: `./tests/evidences/ShouldHaveFullyFilledForm.png` })

        const NomeFieldData = await page.inputValue(FormData.Nome.selector);
        expect(NomeFieldData).toBe(FormData.Nome.value);

        const EmailFieldData = await page.inputValue(FormData.Email.selector);
        expect(EmailFieldData).toBe(FormData.Email.value);

        const AssuntoFieldData = await page.inputValue(FormData.Assunto.selector);
        expect(AssuntoFieldData).toBe(FormData.Assunto.value);

        const TelefoneFieldData = await page.inputValue(FormData.Telefone.selector);
        expect(TelefoneFieldData).toBe(FormData.Telefone.value);

        const MensagemFieldData = await page.inputValue(FormData.Mensagem.selector);
        expect(MensagemFieldData).toBe(FormData.Mensagem.value);
    })

    it('Should fail to submit form due to missing required fields', async ({ }) => {

    });
})