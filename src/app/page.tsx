"use client"
import { z } from "zod"

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card"
import {ChangeEvent, useState} from "react"

const Page = () => {
  const [emailInput, setEmailInput] = useState<string>("")
  const [errorMessage, setErrorMessage] = useState("")
  const [passwordInput, setPasswordInput] = useState<string>("")
  const [usernameInput, setUsernameInput] = useState<string>("")
  const [userErrorMessage, setUserErrorMessage] = useState("")
  const [passwordError, setPasswordError] = useState("")


  const handleEmailInput = (event: ChangeEvent<HTMLInputElement>) => {
    setEmailInput(event.target.value);
    setErrorMessage("")
  }
  const handleUsernameInput = (event: ChangeEvent<HTMLInputElement>) => {
    setUsernameInput(event.target.value);
    setUserErrorMessage("")
  }
  const handlePasswordInput = (event: ChangeEvent<HTMLInputElement>) => {
    setPasswordInput(event.target.value);
    setPasswordError("")
  }
  const validateUsername = () => {
    try {
      const parsedString: Username = usernameSchema.parse(usernameInput)
      console.log(parsedString)
    } catch (error){
      if (error instanceof z.ZodError)
        setUserErrorMessage("No")
    };
  }

  const validateEmail = () => {
    try {
      const parsedString: Email = emailSchema.parse(emailInput)
      console.log(parsedString)
      setErrorMessage("")
    } catch (error) {
      if (error instanceof z.ZodError) {
      setErrorMessage("Bad")        
      }
    }
  }

  const validatePassword = () => {
    try {
      const parsedString: Password = passwordSchema.parse(passwordInput)
    } catch (error){
      if (error instanceof z.ZodError)
        setPasswordError("bad pass")
    }
  }
  const usernameSchema = z.string().max(30).min(3)
  type Username = z.infer<typeof usernameSchema>
  const emailSchema = z.string().email()
  type Email = z.infer<typeof emailSchema>
  const passwordSchema = z.string().min(8).max(30)
  type Password = z.infer<typeof passwordSchema>




  return (
    <Card className="flex justify-center items-center h-[500px] w-[400px]">
      <CardContent className="flex flex-col gap-1 w-full">
      <Input 
      className="w-full" 
      value={emailInput} 
      onChange={handleEmailInput}>
      </Input>
      {errorMessage && <p className="text-red-500 text-base">{errorMessage}</p>}        

      <Input className="w-full" value={passwordInput} onChange={handlePasswordInput}></Input>
      {passwordError && <p className="text-red-500 text-base">{passwordError}</p>}
      <Input className="w-full" value={usernameInput} onChange={handleUsernameInput}></Input>
      {userErrorMessage && <p className="text-red-500 text-base">{userErrorMessage}</p>}   
      <Button className='w-full' onClick={() => { validateEmail(); validateUsername(); validatePassword()}}>Sign up</Button>            
      </CardContent>

    </Card>

  )
}


export default Page;