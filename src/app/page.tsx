"use client"
import { z } from "zod"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card"
import { ChangeEvent, useState } from "react"

const Page = () => {
  const [emailInput, setEmailInput] = useState<string>("")
  const [errorMessage, setErrorMessage] = useState("")

  const [passwordInput, setPasswordInput] = useState<string>("")
  const [fullnameInput, setFullnameInput] = useState<string>("")
  const [usernameInput, setUsernameInput] = useState<string>("")
  const [userErrorMessage, setUserErrorMessage] = useState("")

  const handleEmailInput = (event: ChangeEvent<HTMLInputElement>) => {
    setEmailInput(event.target.value);
    setErrorMessage("")
  }
  const handleUsernameInput = (event: ChangeEvent<HTMLInputElement>) => {
    setUsernameInput(event.target.value);
    setUserErrorMessage("")
  }

  const validateUsername = () => {
    try {
      const parsedString: Username = usernameSchema.parse(usernameInput)
    } catch (error){
      if (error instanceof z.ZodError)
        setUserErrorMessage("Username must be between 3 and 30 characters.")
    }
  }

  const validateEmail = () => {
    try {
      const parsedString: Email = emailSchema.parse(emailInput)
      setErrorMessage("")
    } catch (error) {
      if (error instanceof z.ZodError)
        setErrorMessage("Invalid email address.")
    }
  }

  const usernameSchema = z.string().max(30).min(3)
  type Username = z.infer<typeof usernameSchema>
  const emailSchema = z.string().email()
  type Email = z.infer<typeof emailSchema>

  const handleSubmit = async () => {
    validateEmail();
    validateUsername();

    // Only proceed if validation passed
    if (!errorMessage && !userErrorMessage) {
      try {
        const response = await fetch('http://localhost:5000/api/signup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: emailInput,
            username: usernameInput,
            password: passwordInput,
            fullname: fullnameInput,
          }),
        });

        const result = await response.json();

        if (response.ok) {
          // Handle success (e.g., show a success message or redirect)
          console.log('Sign up successful:', result);
        } else {
          // Handle error from the backend (e.g., username already exists)
          console.error('Signup failed:', result.message);
          setErrorMessage(result.message);
        }
      } catch (error) {
        console.error('Error during signup:', error);
      }
    }
  }

  return (
    <Card className="flex justify-center items-center h-[500px] w-[400px]">
      <CardContent className="flex flex-col gap-4 w-full">
        <Input 
          className="w-full" 
          value={emailInput} 
          onChange={handleEmailInput} 
          placeholder="Email"
        />
        {errorMessage && <p className="text-red-500 text-base">{errorMessage}</p>}        

        <Input 
          className="w-full" 
          value={fullnameInput} 
          onChange={(e) => setFullnameInput(e.target.value)} 
          placeholder="Full Name"
        />
        <Input 
          className="w-full" 
          value={passwordInput} 
          onChange={(e) => setPasswordInput(e.target.value)} 
          type="password" 
          placeholder="Password"
        />
        <Input 
          className="w-full" 
          value={usernameInput} 
          onChange={handleUsernameInput} 
          placeholder="Username"
        />
        {userErrorMessage && <p className="text-red-500 text-base">{userErrorMessage}</p>}   
        <Button className='w-full' onClick={handleSubmit}>Sign up</Button>            
      </CardContent>
    </Card>
  )
}

export default Page;
