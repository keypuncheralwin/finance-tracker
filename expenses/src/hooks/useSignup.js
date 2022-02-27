import { useState } from "react"
import { projectAuth } from '../firebase/config'
import { useAuthContext } from "./useAuthContext"

export const useSignUp = () => {
    const [error, setError] = useState(null)
    const [isPending, setIsPending] = useState(null)
    const { dispatch } = useAuthContext()

    const signup = async (email, password, displayName) => {
        setError(null)
        setIsPending(true)

        try {
            //signup user
            const res = await projectAuth.createUserWithEmailAndPassword(email, password)

            if (!res) {
                throw new Error('Could not complete signup')
            }

            //add display name to user
            await res.user.updateProfile({ displayName: displayName })
            //dispatch login function
            dispatch({ type: 'LOGIN', payload: res.user })

            setError(null)
            setIsPending(false)
        }
        catch (err) {
            console.log(err)
            setError(err.message)
            setIsPending(false)
        }
    }

    return { error, isPending, signup }

}