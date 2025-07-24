import * as Yup from "yup";

export const MoreBagsSchema = () => Yup.object().shape({
    quantity: Yup.number()
        .required("new bags quantity is required")
        .min(1, "new bags quantity must be a positive number")
});

const phoneRegex = /^\+9715[0,2-8]\d{7}$/;




export const EmployeeSchema =  Yup.object({
    first_name: Yup.string()
        .required('First name is required')
        .min(3,"First name must be at least 55 characters")
        .max(55, 'First name must be at most 55 characters'),

    last_name: Yup.string()
        .required('Last name is required')
        .min(3,"Last name must be at least 55 characters")
        .max(55, 'Last name must be at most 55 characters'),

    phone: Yup.string()
        .required('Phone number is required')
        .matches(phoneRegex, 'Please enter a valid United Arab Emirates phone number starts with +9715 followed by 8 digits'),

    password: Yup.string()
        .required('Password is required')
        .min(6, 'Password must be at least 6 characters'),

    password_confirmation: Yup.string()
        .oneOf([Yup.ref('password')], 'Passwords must match')
        .required('Password confirmation is required'),

    role: Yup.string()
        .required('Role is required')
        .oneOf(['admin', 'admin_cook', 'driver', 'store_employee'], 'Invalid role'),

    image: Yup.mixed<File>()
        .test('fileType', 'Unsupported file format', (value) => {
            if (!value) return true; // allow empty
            const supportedTypes = ['image/jpeg', 'image/png', 'image/jpg', 'image/gif'];
            return supportedTypes.includes(value.type);
        })
        .test('fileSize', 'Image size must be less than 512KB', (value) => {
            if (!value) return true;
            return value.size <= 512 * 1024;
        }).nullable().optional(),

});

export type EmployeeSchemaType = Yup.InferType<typeof EmployeeSchema>;
