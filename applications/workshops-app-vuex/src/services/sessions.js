import axios from 'axios';

const vote = async (sessionId, voteType) => {
    const response = await axios.put(
        `/sessions/${sessionId}/${voteType}`
    );

    return response.data;
};

const requestNewSession = async (session) => {
    const response = await axios.post(
        `/sessions`,
        session,
        {
            headers: {
                'Content-Type': 'application/json'
            }
        }
    );

    return response.data; // new session object (includes the auto-generated id, ...)
};

export {
    vote,
    requestNewSession
};