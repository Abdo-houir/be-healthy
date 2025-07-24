import { adminLinks, commonLinks } from './config-nav'

const useNavLinks = (role?: string) => {

    switch (role) {
        case "admin":
            return adminLinks
        default:
            return commonLinks
    }
}

export default useNavLinks