import axios from 'axios';

const vote = async (sessionId, voteType) => {
    const response = await axios.put(
        `/sessions/${sessionId}/${voteType}`
    );

    return response.data;
};

export {
    vote
};