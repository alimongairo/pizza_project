import axios from 'axios'

class GetData{
    static async getAll() {
        try {
            const response = await axios.get('https://6324d7019075b9cbee42fada.mockapi.io/items');
            return(response.data);
        } catch(er) {
            console.log(er);
        }
    }
}

export default GetData;
