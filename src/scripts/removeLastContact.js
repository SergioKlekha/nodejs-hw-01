import {readContacts} from '../utils/readContacts.js';
import {writeContacts} from '../utils/writeContacts.js';


export const removeLastContact = async () => {
    const songs = await readContacts();
    songs.pop();
    await writeContacts(songs);
};

removeLastContact();
