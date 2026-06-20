import { createUser } from "../redux/user/userOperation"
import { useDispatch } from "react-redux"

export const RegisterForm = () => {
     const dispatch = useDispatch()
     const handleSubmit = (e) => {
            e.preventDefault()
            const email = e.target.elements.email.value
            const password = e.target.elements.password.value
            dispatch(createUser({email, password}))
     }
     return (
            <form onSubmit={handleSubmit}>
                <input name="email" type="email"></input>
                <input name="password" type="password"></input>
                <button type="submit">Submit</button>
            </form>
            
     )
}