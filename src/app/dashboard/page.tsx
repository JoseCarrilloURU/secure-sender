"use client"

import Image from "next/image";
import "@/app/dashboard/appstyles.css";
import AppBG from "@/components/AppBG";
import React, { useCallback } from "react";
import logoimg from "@/assets/logo.png";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MdLogout } from "react-icons/md";
import { FiPlusCircle } from "react-icons/fi";
// import { IoIosSend } from "react-icons/io";
import { IoSend } from "react-icons/io5";
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useState } from "react";

// const items = [
//   {
//     id: 1,
//     name: "Mi primera licitacion",
//     description: "El inicio de todas las licitaciones en este sistema",
//     date: "2022-12-12",
//     status: "Activa",
//   },
//   {
//     id: 2,
//     name: "Licitacion 2",
//     description: "Descripcion de la licitacion 2",
//     date: "2023-12-12",
//     status: "Activa",
//   },
//   {
//     id: 3,
//     name: "Licitacion 3",
//     description: "Descripcion de la licitacion 3",
//     date: "2024-12-12",
//     status: "Activa",
//   },
//   {
//     id: 4,
//     name: "Licitacion 4",
//     description: "Descripcion de la licitacion 4",
//     date: "2025-12-12",
//     status: "Pendiente",
//   },
//   {
//     id: 5,
//     name: "Licitacion 5",
//     description: "Descripcion de la licitacion 5",
//     date: "2026-12-12",
//     status: "Pendiente",
//   },
//   {
//     id: 6,
//     name: "Licitacion 6",
//     description: "Descripcion de la licitacion 6",
//     date: "2027-12-12",
//     status: "Pendiente",
//   },
//   {
//     id: 7,
//     name: "Licitacion 7",
//     description: "Descripcion de la licitacion 7",
//     date: "2028-12-12",
//     status: "Pendiente",
//   },
//   {
//     id: 8,
//     name: "Licitacion 8",
//     description: "Descripcion de la licitacion 8",
//     date: "2029-12-12",
//     status: "Pendiente",
//   },
//   {
//     id: 9,
//     name: "Licitacion 9",
//     description: "Descripcion de la licitacion 9",
//     date: "2030-12-12",
//     status: "Pendiente",
//   },
// ];

export default function Dashboard() {
  const router = useRouter();
  const [applications, setApplications] = useState([])
  const [application, setApplication] = useState({
    name: '',
    description: '',
    AES_key: null,
    file: null
  })

  const handleFileChange = (e) => {
    setApplication({ ...application, file: e.target.files[0] });
  };
  
  const handleKeyChange = (e) => {
    setApplication({ ...application, AES_key: e.target.files[0] });
  };

  const handleSendApplication = async (e) => {
    e.preventDefault();
    try {
      console.log(application)
      const formData = new FormData();
      formData.append('name', application.name);
      formData.append('description', application.description);
      formData.append('file', application.AES_key);
      formData.append('file', application.file);

      const response = await fetch('http://localhost:3000/send/txt', {
        method: 'POST',
        body: formData,
        credentials: 'include'
      });

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleLogout = async () => {
    try{
      const response = await fetch('http://localhost:3000/auth/logout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include'
      })
      const data = await response.json()
      console.log(data)
      if(response.ok){
        router.push('/')
        
      }
    }catch(error){
      console.error('Error:', error)
    }
  }


  const getApplications = useCallback(async () => {
    try {
      const response = await fetch('http://localhost:3000/application', {
        method: 'GET',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
      })
      const data = await response.json()
      console.log(data)
      if(response.ok){
        setApplications(data.applications)

        console.log('Aplicaciones:', applications);
      }
    } catch (error) {
      console.error('Error:', error)
    }
  }, []) 

  useEffect(() => {
    console.log('jola me monte')
    getApplications()
  }, [getApplications])

  return (
    <div>
      <div className="w-full bg-white rounded-b-3xl absolute top-0 h-20 z-50">
        <Image src={logoimg} alt="logo" id="logo" />
        <h1 id="user">¡Bienvenido!</h1>
        <Button id="logout" onClick={handleLogout}>
          {" "}
          <MdLogout />
          Cerrar Sesión{" "}
        </Button>
        <form onSubmit={handleSendApplication}>
        <Dialog>
          <DialogTrigger asChild>
            <Button id="new" className=" bg-blue-900 hover:bg-blue-700">
              {" "}
              <FiPlusCircle />
              Nueva Licitación{" "}
            </Button>
          </DialogTrigger>
          <DialogContent id="dialog" className="sm:max-w-[450px]">
            <DialogHeader>
              <DialogTitle className="font-bold text-center text-3xl -mt-2">
                Nueva Licitación
              </DialogTitle>
              <DialogDescription className="text-center">
                Introduce la información y sube los archivos necesarios.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <form action=""></form>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Nombre
                </Label>
                <Input
                  id="name"
                  defaultValue="Nueva Licitación"
                  className="col-span-3"
                  value={application.name}
                  onChange={(e) => setApplication({ ...application, name: e.target.value })}
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="username" className="text-right">
                  Descripción
                </Label>
                <Textarea
                  id="username"
                  defaultValue="Descripción de la Licitación"
                  className="col-span-3"
                  value={application.description}
                  onChange={(e) => setApplication({ ...application, description: e.target.value })}
                />
              </div>
              <Label htmlFor="username" className="">
                Archivo a Encriptar
              </Label>
              <Input 
              className="" 
              type="file"
              onChange={handleFileChange}
              name="file"
              />
              <Label htmlFor="username" className="">
                Llave AES
              </Label>
              <Input 
              className="" 
              type="file"
              onChange={handleKeyChange}
              name="AES_key"
              />
            </div>
            <DialogFooter>
              <DialogClose asChild>
                <Button type="submit" className="text-md -mt-1" onClick={handleSendApplication}>
                  <IoSend />
                  Enviar
                </Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
        </form>
      </div>
      <div className="grid grid-cols-3 gap-8 mt-6">
        {applications.map((item) => (
            <div key={item.id} id="card" className="p-5 border">
            <h1 id="cardname">{item.name}</h1>
            <p id="carddesc">{item.description}</p>
            <p id="carddate">{new Date(item.date).toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
            <p id="cardstatus">{item.status}</p>
          </div>
        ))}
      </div>
      <AppBG />
      <h1 id="title">Tus Licitaciones</h1>
    </div>
  );
}
