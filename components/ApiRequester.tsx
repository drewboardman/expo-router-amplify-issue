import { apiGateWayName } from '@/app/amplifyconfigs/apiGateway';
import { useAuth } from '@/app/contexts/AuthContext';
import { get } from 'aws-amplify/api';

export const ApiCaller = () => {
    const { authToken } = useAuth(); // may want to move this into a component prop that you DI in
    const handleClick = async () => {
        try {
            const restOperation = get({ 
                apiName: apiGateWayName,
                path: '/hello',
                options: {
                    headers: {
                        Authorization: authToken ?? ''
                    }
                }
            });
            const response = await restOperation.response;
            console.log('GET call succeeded: ', response);
        } catch (e) { console.log(e); }
    };
    return (
        <button onClick={handleClick}>Make API Request</button>
    );
};