interface CustomerType {
    customerName: string;
    driverName: string
    driverId: string;
    bagId: string
    status: string
    date: string
}

type RoleType = 'admin' | 'admin_cook' | 'driver' | 'store_employee' | "user";
type AuthType = 'authenticated' | 'unauthenticated';

interface UserType {
    id: number;
    first_name: string;
    last_name: string;
    phone: string;
    phone_verified_at: string; // ISO date string
    email: string | null;
    image: string | null;
    is_active: boolean;
    role: RoleType
    created_at: string; // ISO date string
    updated_at: string; // ISO date string
};
interface LoginType extends UserType {
    token: string;
}

type LoginInput = {
    phone: string;
    password: string
}

type BagStatus = "available" | 'unavailable';

interface BagType {
    id: number;
    bag_id: number;
    status: BagStatus;
    customer_id: number | null;
    qr_code_path: string | null;
    last_update_at: string | null;
    created_at: string;
    updated_at: string;
}

interface TableEmployeeType {
    id: number;
    first_name: string,
    last_name: string,
    phone: string,
    role: RoleType
}

interface EmployeeType {
    id: number;
    first_name: string,
    last_name: string,
    phone: string,
    role: RoleType,
    image: string | null
}

