import it from '@playwright/test';
import { test, expect } from '@playwright/test';
import { FormData } from './data/FormData';

test.describe('Contact component testing', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto("/");
    });

    it('Should populate every input in the form', async ({ page }) => {
        await page.fill(FormData.Name.selector, FormData.Name.value)
        await page.fill(FormData.Email.selector, FormData.Email.value)
        await page.fill(FormData.Subject.selector, FormData.Subject.value)
        await page.fill(FormData.Phone.selector, FormData.Phone.value)
        await page.fill(FormData.Message.selector, FormData.Message.value)
        await page.screenshot({ path: `./tests/evidences/ShouldHaveFullyFilledForm.png` })

        const NameFieldData = await page.inputValue(FormData.Name.selector);
        expect(NameFieldData).toBe(FormData.Name.value);

        const EmailFieldData = await page.inputValue(FormData.Email.selector);
        expect(EmailFieldData).toBe(FormData.Email.value);

        const SubjectFieldData = await page.inputValue(FormData.Subject.selector);
        expect(SubjectFieldData).toBe(FormData.Subject.value);

        const PhoneFieldData = await page.inputValue(FormData.Phone.selector);
        expect(PhoneFieldData).toBe(FormData.Phone.value);

        const MessageFieldData = await page.inputValue(FormData.Message.selector);
        expect(MessageFieldData).toBe(FormData.Message.value);
    })

    it('Should fail to submit form due to missing required fields', async ({ page }) => {

        await page.fill(FormData.Name.selector, "")
        await page.fill(FormData.Email.selector, "invalidmail")
        await page.fill(FormData.Subject.selector, "")
        await page.fill(FormData.Phone.selector, "")
        await page.fill(FormData.Message.selector, "")
        await page.click('button:text("Enviar")')
        await page.screenshot({ path: `./tests/evidences/ShouldShowErrorMessageOnRequiredFields.png` })

        const NameErrorField = await page.textContent(`data-test-id=error-Name`);
        expect(NameErrorField).toBe("Name cannot be empty");

        const EmailErrorField = await page.textContent(`data-test-id=error-Email`);
        expect(EmailErrorField).toBe("Email is invalid");

        const SubjectErrorField = await page.textContent(`data-test-id=error-Subject`);
        expect(SubjectErrorField).toBe("Subject cannot be empty");

        const MessageErrorField = await page.textContent(`data-test-id=error-Message`);
        expect(MessageErrorField).toBe("Message cannot be empty");

    });

    it('Should send email and display feedback modal', async ({ page }) => {
        await page.fill(FormData.Name.selector, FormData.Name.value)
        await page.fill(FormData.Email.selector, FormData.Email.value)
        await page.fill(FormData.Subject.selector, FormData.Subject.value)
        await page.fill(FormData.Phone.selector, FormData.Phone.value)
        await page.fill(FormData.Message.selector, FormData.Message.value)
        await page.click('button:text("Enviar")')
        await page.screenshot({ path: `./tests/evidences/ShouldShowModal.png` })

        const modal = await page.$$("data-test-id='react-portal-modal'")
        expect(modal).toBeTruthy();
    });
})