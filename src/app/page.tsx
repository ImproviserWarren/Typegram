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
        setUserErrorMessage("No")
    }
  }

  const validateEmail = () => {
    try {
      const parsedString: Email = emailSchema.parse(emailInput)
      setErrorMessage("")
    } catch (error) {
      if (error instanceof z.ZodError)
      setErrorMessage("Bad")
    }
  }
  const usernameSchema = z.string().max(30).min(3)
  type Username = z.infer<typeof usernameSchema>
  const emailSchema = z.string().email()
  type Email = z.infer<typeof emailSchema>


  return (
    <Card className="flex justify-center items-center h-[500px] w-[400px]">
      <CardContent className="flex flex-col gap-4 w-full">
      <Input 
      className="w-full" 
      value={emailInput} 
      onChange={handleEmailInput}>
      </Input>
      {errorMessage && <p className="text-red-500 text-base">{errorMessage}</p>}        

      <Input className="w-full"></Input>
      <Input className="w-full"></Input>
      <Input className="w-full" value={usernameInput} onChange={handleUsernameInput}></Input>
      {userErrorMessage && <p className="text-red-500 text-base">{userErrorMessage}</p>}   
      <Button className='w-full' onClick={() => { validateEmail(); validateUsername()}}>Sign up</Button>            
      </CardContent>

    </Card>

  )
}


export default Page;