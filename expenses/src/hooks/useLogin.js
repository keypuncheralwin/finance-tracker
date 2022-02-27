import { useEffect, useState } from "react"
import { projectAuth } from '../firebase/config'
import { useAuthContext } from "./useAuthContext"

export const useLogin = () => {
    const [isCancelled, setIsCancelled] = useState(false)
    const [error, setError] = useState(null)
    const [isPending, setIsPending] = useState(false)
    const { dispatch } = useAuthContext()

    const logout = async () => {
        setError(null)
        setIsPending(true)

        //sign the user out
        try {
            const res = await projectAuth.signInWithEmailAndPassword(email, password)
            dispatch({ type: 'LOGIN', payload: res.user })

            //update State 
            if (!isCancelled) {
                setError(null)
                setIsPending(false)
            }

        }
        catch (err) {
            if (!isCancelled) {
                console.log(err)
                setError(err.message)
                setIsPending(false)
            }
        }
    }

    useEffect(() => {
        return () => setIsCancelled(true)
    }, [])

    return { login, error, isPending }
}