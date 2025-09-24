import { Button } from "@/components/ui/button";
import React from "react";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
    const navigate = useNavigate();

    function handleLogin(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
        event.preventDefault();
        navigate("/painel");
    }

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <h2 className="text-2xl font-bold">Bem vindos ao Mocafé.</h2>
      <Button onClick={handleLogin}>Clique aqui para Entrar</Button>
    </div>
  );
};

export default Welcome;
