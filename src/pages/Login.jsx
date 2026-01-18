import { Alert, Box, Button, OutlinedInput, Typography } from "@mui/material"
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { useApp } from "../AppProvider"
import { API_URL } from "../libs/config";

export default function Login() {
    const [loginError, setLoginError] = useState(false)
    const navigate = useNavigate()
    const { setAuth } = useApp();


    const {
            register,
            handleSubmit,
            formState: { errors },
        } = useForm();

    const login = async data => {
            const res = await fetch(`${API_URL}/users/login`, {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    "Content-Type":"application/json"
                }
            })

            if(!res.ok) {
                setLoginError(true);
                return false;
            }

            const {user, token} = await res.json()
            setAuth(user);
            localStorage.setItem("token", token);
            navigate("/")
    }
    return <Box>
            <Typography variant="h3">Login</Typography>

            {loginError && (
                            <Alert severity="warning" sx={{mt:2}}>
                                Unable to login.
                            </Alert>

            )}
            <form onSubmit={handleSubmit(login)}>
                <OutlinedInput
                fullWidth
                placeholder="username"
                sx={{mt:2}}
                {...register("username", { required: true })}
                />
                {errors.name && (
					<Typography color="error">username is required</Typography>
				)}

                <OutlinedInput
                fullWidth
                type="password"
                placeholder="password"
                sx={{mt:2}}
                 {...register("password", { required: true })}
                />
                 {errors.password && (
					<Typography color="error">password is required</Typography>
				)}
                

                <Button type="submit" fullWidth variant="contained" sx={{mt:2}}>
                Login
                </Button>

                
            </form>
    </Box>
}