"use client"

import Image from "next/image";
import "@/app/homestyles.css";
import IconsBG from "@/components/IconsBG";
import SplitBG from "@/components/SplitBG";
import logoimg from "@/assets/logo.png";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  //CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from 'next/navigation';
import { useEffect } from "react";

export default function Home() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const router = useRouter();

  useEffect(()=>{

  }, []);

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("register");
    try {
      const response = await fetch('http://localhost:3000/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          email,
          password,
        }),
      })
      const data = await response.json();
      if(response.ok){
        console.log('Usuario registrado', data);
        
      }
    } catch (error) {
      console.log('Error al registrarse', error);
    }
    
  }

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("login");
    try {
      console.log('Iniciando sesión');
      const response = await fetch('http://localhost:3000/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          password,
        }),
        credentials: 'include',
      })
      const data = await response.json();
      console.log(data);
      if(response.ok){
        console.log('Usuario logueado', data);
        router.push('/dashboard');
      }
    } catch (error) {
      console.log('Error al iniciar sesión', error  );
  }
  }
    return (
    <div>
      <div className="w-full h-full bg-black absolute" />
      <IconsBG />
      <SplitBG />
      <Image src={logoimg} alt="logo" id="logo" />

      <div id="login">
        <Card id="logincard">
          <CardHeader>
            <CardTitle className="text-3xl text-center font-bold">
              {" "}
              Inicio de Sesión{" "}
            </CardTitle>
            <CardDescription className="text-center">
              Ingresa tus credenciales para entrar en tu cuenta.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              <form onSubmit={handleLogin}>
                <div className="mt-4 grid gap-2">
                  <Label>Correo Electrónico / Nombre de Usuario</Label>
                  <Input
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    id="username"
                    type="text"
                    placeholder="correo@ejemplo.com / usuarioejemplo"
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <div className="flex items-center">
                    <Label className="mt-[6%]">Contraseña</Label>
                  </div>
                  <Input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    id="password"
                    type="password"
                    placeholder="Ejemplo123*"
                    required
                  />
                </div>
                <Button type="submit" className="mt-10 w-full">
                  Iniciar Sesión
                </Button>
              </form>
            </div>
          </CardContent>
        </Card>
      </div>

      <div id="register">
        <Card className="shadow-none rounded-3xl border-none">
          <CardHeader>
            <CardTitle className="text-3xl text-center font-bold">
              Registro
            </CardTitle>
            <CardDescription className="text-center">
              Introduce tus datos para crear tu nueva cuenta.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              <form onSubmit={handleRegister}>
                <div className="mt-4 grid gap-2">
                  <Label className="">Correo Electrónico</Label>
                  <Input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    id="email"
                    type="email"
                    placeholder="correo@ejemplo.com"
                    required
                  />
                </div>
                <div className="mt-[6%] grid gap-2">
                  <Label className="">Nombre de Usuario</Label>
                  <Input
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    id="username"
                    type="text"
                    placeholder="usuarioejemplo"
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <Label className="">Contraseña</Label>
                  <Input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    id="password"
                    type="password"
                    placeholder="Ejemplo123*"
                    required
                  />
                </div>
                <Button type="submit" className="mt-10 w-full">
                  Crear Cuenta
                </Button>
              </form>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
