import WorkspaceCat from '../../assets/illustrations/workspace-cat.svg'
import GirlReading from '../../assets/illustrations/girl-reading.svg'
import { IModalContent } from '../Modal/index';

export function SendingEmail(callback: Function): IModalContent {
    return {
        image: "Loading",
        illustration: WorkspaceCat,
        title: "Sending email",
        description: "Your email will be sent shortly (if the cat allows)",
        close: callback
    }
}

export function EmailSent(callback: Function): IModalContent {
    return {
        image: "Success",
        illustration: GirlReading,
        title: "Email sent successfully",
        description: "We are reading your email and will get back to you shortly.",
        close: callback
    }
}

export function EmailError(callback: Function): IModalContent {
    return {
        image: "Error",
        illustration: WorkspaceCat,
        title: "Something went wrong",
        description: "We could not send your email. Please, try again later.",
        close: callback
    }
}