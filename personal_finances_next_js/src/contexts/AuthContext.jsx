import { createContext } from "react";
import { setCookie } from "nookies";
import Router from "next/router";
import React, { useState } from 'react';
import ErrorModal from '../components/ErrorModal';
import { api } from "@/services/api";

export const AuthContext = createContext({})

export function AuthProvider({ children }) {
    const [error, setError] = useState(null);

    async function signIn(email, password) {
        try {
            const res = await fetch("http://localhost:5281/api/Account/Login", {
                method: "POST",
                body: JSON.stringify({
                    email,
                    password
                    }),
                headers: {
                    "Content-Type": "application/json",
                },
            });

            const data = await res.json();
            console.log(data);

            // Handle success or show error modal based on response
            if (data.success) {
                // Handle successful login
                var segundosLogados = 60 * 60 * 24;

                var token = data.data.value;

                setCookie(undefined, "personalfinances.token", token, {
                    maxAge: segundosLogados,
                });

                Router.push("/");
            } else {
                setError(data.message);
            }
            } catch (err) {
            console.log(err);
            setError("An error occurred. Please try again later.");
            }
    }

    const closeModal = () => {
      setError(null);
    };

    return (
        <AuthContext.Provider value={{ signIn }}>
            {children}
        
            {error && <ErrorModal error={error} onClose={closeModal} />}
        </AuthContext.Provider>
    )
}