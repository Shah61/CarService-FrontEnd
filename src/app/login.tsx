'use client';

import React, { useState } from 'react'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { EyeIcon, EyeOffIcon } from 'lucide-react'
import RegistrationForm from './register';

export default function Home() {
  const [showPassword, setShowPassword] = useState(false)
  const [showRegistration, setShowRegistration] = useState(false)

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  const toggleRegistrationForm = (e: React.MouseEvent) => {
    e.preventDefault()
    setShowRegistration(!showRegistration)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('Login form submitted')
  }

  if (showRegistration) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gradient-to-b from-[#e6e6fa] to-[#a7a7ff] overflow-hidden">
        <RegistrationForm onBackToLogin={toggleRegistrationForm} />
      </main>
    )
}


  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gradient-to-b from-[#e6e6fa] to-[#a7a7ff]">
      <Card className="w-[500px] h-[470px]">
        <CardHeader className="text-center">
          <h2 className="text-2xl font-bold">Log in</h2>
          <div className="flex items-center justify-center space-x-2 mt-2">
            <Image src="/servislah-logo.png" alt="ServisLah Logo" width={40} height={40} />
            <h3 className="text-3xl font-extrabold">ServisLah</h3>
          </div>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <Input type="email" placeholder="Email" />
              <div className="relative">
                <Input 
                  type={showPassword ? "text" : "password"} 
                  placeholder="Password" 
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 cursor-pointer"
                >
                  {showPassword ? (
                    <EyeOffIcon className="h-4 w-4" />
                  ) : (
                    <EyeIcon className="h-4 w-4" />
                  )}
                </button>
              </div>
              <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">Log in</Button>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col space-y-2">
          <a href="#" className="text-sm text-blue-600 hover:underline">Forgot password?</a>
          <Button variant="outline" className="w-full">
            <Image src="/google-logo.png" alt="Google Logo" width={20} height={20} className="mr-2" />
            Continue with Google
          </Button>
          <Button variant="outline" className="w-full">
            <Image src="/apple-logo.png" alt="Apple Logo" width={20} height={20} className="mr-2" />
            Continue with Apple
          </Button>
          <p className="text-sm text-center">
            New User? <button onClick={toggleRegistrationForm} className="text-blue-600 hover:underline">Register here</button>
          </p>
        </CardFooter>
      </Card>
    </main>
  )
}