import React from "react";
import { Link } from "react-router-dom";

const WidgetForm:React.FC<{}> = () =>{
    return(
        <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
            <header className="text-xl leading-6">
                <span>Deixe seu feedback</span>
            </header>
            <footer className="text-x3 text-neutral-400">
                    Feito com 😍❤️ durante a <Link className="underline underline-offset-2" target="_blank" to="https://blog.rocketseat.com.br/tag/nlw/">NLW Return</Link>
            </footer>
        </div>
    )
};


export { WidgetForm }