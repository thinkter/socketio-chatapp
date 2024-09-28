'use client';
/* this is a client component because it has input fields and them shit*/

import { useCallback, useState } from "react";
import { FieldValue, FieldValues, useForm } from "react-hook-form";

type Variant = 'LOGIN' | 'REGISTER';
const AuthForm = () => {
    const [variant, setVariant] = useState<Variant>('LOGIN');
    const [isLoading, setIsLoading] = useState(false);

    const toggleVariant = useCallback(() => {
        if (variant == "LOGIN") {
            setVariant('REGISTER');
        } else {
            setVariant("LOGIN");
        }
    }, [variant]);


    const {
        register,
        handleSubmit,
        formState: {
            errors
        }
    } = useForm<FieldValues>({
        defaultValues: {
            name: '',
            email: '',
            password: ''
        }
    });

    return (
        <div>
            AuthForm1
        </div>
    );
}

export default AuthForm;