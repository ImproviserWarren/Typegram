"use client"


import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import react, {useState, useEffect} from 'react'



const Page = () => {
const [emailInput, setEmailInput] = useState()
const [password, setPasswordInput] = useState('')
const [username, setUsernameInput] = useState('')
const [firstName, setFirstnameInput] = useState('')
const [lastName, setlastNameInput] = useState('')

const [emailError, setEmailError] = useState<boolean>(false)

const handleEmailInput = (e : any) => {    
    setEmailInput(emailInput)
    console.log(e)
}
const handlePasswordInput =  (e : any) => {
    setPasswordInput(password)
    console.log(e)
}
const handleUsernameInput = (e : any) => {
    setUsernameInput(username)
    console.log(e)
}
const handleFirstnameInput = (e : any) => {
    setFirstnameInput(firstName)
    console.log(e)
}
const handleLastnameInput = (e : any) => {
    setlastNameInput(lastName)
    console.log(e)
}

const validateSignUp = () => {
    if (emailInput === ' ') {
        console.log("nothing")
    } else {
        console.log("No")
    }
}
// const signUp = () => {
//     if (emailError === true) {
//         console.log("Nothing")
//     } else {
//         console.log("Go")
//     }
// }

    return (
        <div className="flex items-center justify-center h-screen w-200px">
            <Card>
                <CardHeader>
                    <CardTitle>Instagram</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <Input placeholder="Email" value={emailInput} onChange={e => (handleEmailInput(e.target.value))}/>
                    <Input placeholder="Password" value={password} onChange={e => (handlePasswordInput(e.target.value))}/>
                    <Input placeholder="Username" value={username} onChange={e => {handleUsernameInput(e.target.value)}}/>
                    <Input placeholder="First name" value={firstName} onChange={e => {handleFirstnameInput(e.target.value)}}/>
                    <Input placeholder="last name" value={lastName} onChange={e => handleLastnameInput(e.target.value)}/>
                </CardContent>
                <CardFooter>
                    <Button variant="outline" onClick={validateSignUp}>Sign up</Button>

                </CardFooter>
            </Card>

        </div>
    )
}

export default Page;