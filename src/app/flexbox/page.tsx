import Caixa from "../components/caixa";

export default function Inicio() {
  return (    
    <div 
    className="
    bg-gradient-to-r from-black to-zinc-800 min-h-screen
    "
    >
        <h1 className="font-black"> Masterclass Next</h1>
        <nav className="">
            <ul className="flex flex-row">
                <li className="p-4">
                    <a href="/flexbox">Flexbox</a>
                </li>
                <li className="p-4">
                    <a href="/primeiro">Primeiro</a>
                </li>
                <li className="p-4">
                    <a href="/layout">Layout</a>
                </li>
            </ul>
        </nav>
        <Caixa texto="#1"/>
    </div>);
}