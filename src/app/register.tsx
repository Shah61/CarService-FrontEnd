'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { EyeIcon, EyeOffIcon } from 'lucide-react';

type PasswordField = 'password' | 'confirmPassword';

interface RegistrationFormProps {
  onBackToLogin: (e: React.MouseEvent) => void;
}

export default function RegistrationForm({ onBackToLogin }: RegistrationFormProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = (field: PasswordField) => {
    if (field === 'password') {
      setShowPassword(!showPassword);
    } else if (field === 'confirmPassword') {
      setShowConfirmPassword(!showConfirmPassword);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Registration form submitted');
  };

  return (
    <Card className="w-[400px]">
      <CardHeader className="text-center">
        <h2 className="text-2xl font-bold">Create Account</h2>
        <div className="flex items-center justify-center space-x-2 mt-2">
          <Image src="/servislah-logo.png" alt="ServisLah Logo" width={40} height={40} />
          <h3 className="text-3xl font-extrabold">ServisLah</h3>
        </div>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Button type="button" variant="outline" className="w-full">
            <Image src="/google-logo.png" alt="Google Logo" width={20} height={20} className="mr-2" />
            Sign Up With Google
          </Button>
          <Button type="button" variant="outline" className="w-full">
            <Image src="/apple-logo.png" alt="Apple Logo" width={20} height={20} className="mr-2" />
            Sign Up With Apple
          </Button>
          <Input type="email" placeholder="Email" required />
          <div className="relative">
            <Input 
              type={showPassword ? "text" : "password"} 
              placeholder="Password" 
              required
            />
            <button
              type="button"
              onClick={() => togglePasswordVisibility('password')}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 cursor-pointer"
            >
              {showPassword ? <EyeOffIcon className="h-4 w-4" /> : <EyeIcon className="h-4 w-4" />}
            </button>
          </div>
          <div className="relative">
            <Input 
              type={showConfirmPassword ? "text" : "password"} 
              placeholder="Confirm Password" 
              required
            />
            <button
              type="button"
              onClick={() => togglePasswordVisibility('confirmPassword')}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 cursor-pointer"
            >
              {showConfirmPassword ? <EyeOffIcon className="h-4 w-4" /> : <EyeIcon className="h-4 w-4" />}
            </button>
          </div>
          <Input type="tel" placeholder="Phone Number" required />
          <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">Register</Button>
        </form>
        <p className="mt-4 text-sm text-center">
          Already have an account? <button onClick={onBackToLogin} className="text-blue-600 hover:underline">Log in here</button>
        </p>
      </CardContent>
    </Card>
  );
}