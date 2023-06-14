import React, { createContext } from "react";
import { StatusUser } from "../../domain/entities/User";

type AuthContextProps = {
    errorMessage: string,
    token: string | null,
    user:StatusUser
}

const autContext = createContext({})