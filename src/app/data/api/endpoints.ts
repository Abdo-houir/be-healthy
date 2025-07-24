export const endpoints = {
    auth: {
        login: "/api/loginUser/",
        register: "/register/",
    },
    admin: {
        bags: {
            getAllBags: "/api/bag/getAllBags/",
            addBag: "/api/bag/addBag/",
            deleteBag: (id: string | number) => `/api/bag/deleteBag/${id}/`,
            getBagByStatus: (status: string) => `/api/bag/getBagByStatus/${status}/`,
            searchBagById: (id: string | number) => `/api/bag/searchBagById/${id}/`,
        },
        employees: {
            // 👤 employees endpoints
            createUser: "/api/admin/createUser/",
            updateUser: (id: string | number) => `/api/admin/updateUser/${id}/`,
            deleteUser: (id: string | number) => `/api/admin/deleteUser/${id}/`,
            getUser: (id: string | number) => `/api/admin/getUser/${id}/`,
            getAllUsers: (request: string) => `/api/admin/getAllUsers/${request}/`,

            // 💬 Message endpoints
            getMessage: (id: string | number) => `/api/admin/getMessage/${id}/`,
            getAllMessages: "/api/admin/getAllMessages/",
            getMessageByType: (type: string) => `/api/admin/getMessageByType/${type}/`,
        }
    }
}