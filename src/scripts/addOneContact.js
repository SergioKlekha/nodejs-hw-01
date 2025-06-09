import {createFakeContact} from "../utils/createFakeContact.js";
import {writeContacts} from '../utils/writeContacts.js';
import {readContacts} from '../utils/readContacts.js';




export const addOneContact = async () => {
    const read = await readContacts();
    const newContact = createFakeContact();
    await writeContacts([...read, newContact]);
};

addOneContact();
