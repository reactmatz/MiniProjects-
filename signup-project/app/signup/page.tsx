import Link from "next/link"
import Image from "next/image";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Component() {
  return (
    <div className="min-h-screen bg-[#1a1825] text-white">
      <header className="container mx-auto p-4 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
        <Image
          src="/dio.svg"
          alt="Logo da plataforma"
          width={162}
          height={64}
          className="w-8 h-8"
        />
       
        </Link>
        <nav className="flex items-center gap-4">
          <Link href="/" className="text-white/80 hover:text-white">
            Home
          </Link>
          <Button variant="secondary" className="bg-[#2a2837] hover:bg-[#2a2837]/80">
            Entrar
          </Button>
          <Button variant="secondary" className="bg-[#2a2837] hover:bg-[#2a2837]/80">
            Cadastrar
          </Button>
        </nav>
      </header>

      <main className="container mx-auto px-4 mt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="space-y-6">
            <h1 className="text-4xl font-bold leading-tight">
              A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas
              mais desejadas.
            </h1>
          </div>

          <div className="lg:max-w-md space-y-8">
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">Comece agora grátis</h2>
              <p className="text-white/60">Crie sua conta e make the change._</p>
            </div>

            <form className="space-y-4">
              <div className="space-y-2">
                <Input
                  type="text"
                  placeholder="Nome completo"
                  className="bg-[#1e1c2a] border-[#2a2837] h-12"
                />
              </div>
              <div className="space-y-2">
                <Input
                  type="email"
                  placeholder="E-mail"
                  className="bg-[#1e1c2a] border-[#2a2837] h-12"
                />
              </div>
              <div className="space-y-2">
                <Input
                  type="password"
                  placeholder="Password"
                  className="bg-[#1e1c2a] border-[#2a2837] h-12"
                />
              </div>
              <Button className="w-full h-12 bg-[#e4105d] hover:bg-[#e4105d]/90 text-white">
                Criar minha conta
              </Button>
            </form>

            <p className="text-sm text-white/60 text-center">
              Ao clicar em `criar minha conta grátis`, declaro que aceito as Políticas de Privacidade e os Termos de Uso da
              DIO.
            </p>

            <p className="text-sm text-center">
              Já tenho conta.{" "}
              <Link href="/login" className="text-[#23dd7a] hover:text-[#23dd7a]/80">
                Fazer login
              </Link>
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}