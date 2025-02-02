import Image from "next/image";
import "@/app/homestyles.css";
import IconsBG from "@/components/IconsBG";
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
      <Image src={logoimg} alt="logo" id="logo" />

      <div id="login">
        <Card className="shadow-none rounded-3xl">
          <CardHeader>
            <CardTitle className="text-3xl text-center">
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
        <Card className="shadow-none rounded-3xl border-none bg-black">
          <CardHeader>
            <CardTitle className="text-3xl text-center text-white">
              Registro
            </CardTitle>
            <CardDescription className="text-center text-white">
              Introduce tus datos para crear tu nueva cuenta.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              <form>
                <div className="mt-4 grid gap-2">
                  <Label className="text-white">Correo Electrónico</Label>
                  <Input
                    v-model="email"
                    id="email"
                    type="email"
                    placeholder="correo@ejemplo.com"
                    required
                  />
                </div>
                <div className="mt-[6%] grid gap-2">
                  <Label className="text-white">Nombre de Usuario</Label>
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
                    <Label className="mt-[6%] text-white">Contraseña</Label>
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
                <Button
                  type="submit"
                  className="mt-10 w-full bg-white text-black"
                >
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
