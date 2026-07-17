import axios from 'axios';
import GitClient from './GitClient';

jest.mock('axios');

describe('Git Client Tests', ()=>{
    test('should return repository names for techiesyed', async () => {
        const dummyData = {
            data: [
                { name: 'appscentricsolutions' },
                { name: 'ArrayListDemo' },
                { name: 'CleanArchitecture' }
            ]
        };
        
        axios.get.mockResolvedValue(dummyData);

        const response = await GitClient.getRepositories('techiesyed');

        expect(response.data).toEqual(dummyData.data);

        expect(axios.get).toHaveBeenCalledWith('https://api.github.com/users/techiesyed/repos');
    })
    
})