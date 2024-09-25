import axios from 'axios';

// const baseUrl = process.env.VUE_APP_BASE_URL;

// console.log(baseUrl);

// using fetch - we have not handled error using catch - whoever calls getWorkshops() will handle the error (if any)
const getWorkshops = async (page = 1) => {
    try {
        const response = await axios.get(
            `/workshop`,
            {
                params: {
                    _page: page,
                },
            }
        );

        return response.data;
    } catch (error) {
        throw new Error("Some error occured");
    }
};

const getWorkshopById = async (id) => {
    const response = await axios.get(
        `/workshops/${id}`
    );

    return response.data;
};

// named exports
export {
    getWorkshops,
    getWorkshopById
};