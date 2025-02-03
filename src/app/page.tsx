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
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Home() {
  return (
    <div>
      <div className=" w-full h-full bg-black absolute" />
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
              <form>
                <div className="mt-4 grid gap-2">
                  <Label>Correo Electrónico / Nombre de Usuario</Label>
                  <Input
                    v-model="email"
                    id="email"
                    type="email"
                    placeholder="correo@ejemplo.com / usuarioejemplo"
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <div className="flex items-center">
                    <Label className="mt-[6%]">Contraseña</Label>
                    {/* <router-link
                  to="/ForgotPass"
                  className="ml-auto inline-block text-sm underline mt-[4%]"
                >
                  ¿Olvidaste tu contraseña?
                </router-link> */}
                  </div>
                  <Input
                    v-model="password"
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
              <form>
                <div className="mt-4 grid gap-2">
                  <Label className="">Correo Electrónico</Label>
                  <Input
                    v-model="email"
                    id="email"
                    type="email"
                    placeholder="correo@ejemplo.com"
                    required
                  />
                </div>
                <div className="mt-[6%] grid gap-2">
                  <Label className="">Nombre de Usuario</Label>
                  <Input
                    v-model="email"
                    id="email"
                    type="email"
                    placeholder="usuarioejemplo"
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <div className="flex items-center">
                    <Label className="mt-[6%] ">Contraseña</Label>
                    {/* <router-link
                  to="/ForgotPass"
                  className="ml-auto inline-block text-sm underline mt-[4%]"
                >
                  ¿Olvidaste tu contraseña?
                </router-link> */}
                  </div>
                  <Input
                    v-model="password"
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
